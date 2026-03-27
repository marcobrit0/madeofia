import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "ola@madeof.ia.br";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "MadeofIA <form@mail.madeof.ia.br>";

type ContactPayload = {
  nomeCompleto?: string;
  email?: string;
  empresa?: string;
  website?: string;
  tipoProjeto?: string;
  whatsapp?: string;
  mensagem?: string;
  origin?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      { error: "RESEND_API_KEY nao configurada no servidor." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Payload invalido." }, { status: 400 });
  }

  const validationError = validatePayload(payload);

  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const normalized = {
    nomeCompleto: payload.nomeCompleto!.trim(),
    email: payload.email!.trim(),
    empresa: payload.empresa!.trim(),
    website: payload.website!.trim(),
    tipoProjeto: payload.tipoProjeto!.trim(),
    whatsapp: payload.whatsapp!.trim(),
    mensagem: payload.mensagem!.trim(),
    origin: payload.origin?.trim() || "Origem nao informada",
  };

  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: [CONTACT_TO_EMAIL],
    subject: `Novo contato MadeofIA - ${normalized.nomeCompleto}`,
    replyTo: normalized.email,
    html: renderHtmlEmail(normalized),
    text: renderTextEmail(normalized),
  });

  if (error) {
    return Response.json(
      { error: "Falha ao enviar contato. Tente novamente em alguns instantes." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function validatePayload(payload: ContactPayload) {
  const requiredFields: Array<[keyof ContactPayload, string]> = [
    ["nomeCompleto", "Nome completo"],
    ["email", "Email"],
    ["empresa", "Empresa"],
    ["website", "Website"],
    ["tipoProjeto", "Tipo de projeto"],
    ["whatsapp", "WhatsApp"],
    ["mensagem", "Mensagem"],
  ];

  for (const [key, label] of requiredFields) {
    const value = payload[key];
    if (typeof value !== "string" || !value.trim()) {
      return `${label} e obrigatorio.`;
    }
  }

  if (!isValidEmail(payload.email!)) {
    return "Email invalido.";
  }

  return null;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function renderTextEmail(payload: Required<ContactPayload>) {
  return [
    "Novo contato recebido pelo site da MadeofIA",
    "",
    `Origem: ${payload.origin}`,
    `Nome completo: ${payload.nomeCompleto}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.empresa}`,
    `Website: ${payload.website}`,
    `Tipo de projeto: ${payload.tipoProjeto}`,
    `WhatsApp: ${payload.whatsapp}`,
    "",
    "Mensagem:",
    payload.mensagem,
  ].join("\n");
}

function renderHtmlEmail(payload: Required<ContactPayload>) {
  const fields = [
    ["Origem", payload.origin],
    ["Nome completo", payload.nomeCompleto],
    ["Email", payload.email],
    ["Empresa", payload.empresa],
    ["Website", payload.website],
    ["Tipo de projeto", payload.tipoProjeto],
    ["WhatsApp", payload.whatsapp],
  ];

  return `
    <div style="background:#f3f0e8;padding:32px;font-family:Arial,sans-serif;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #dfdbd1;border-radius:12px;overflow:hidden;">
        <div style="padding:24px 28px;border-bottom:1px solid #e8e2d6;background:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#2f8f4e;">Novo contato</p>
          <h1 style="margin:0;color:#2f2f2f;font-size:28px;line-height:1.1;font-weight:500;">Lead recebido pelo site</h1>
        </div>
        <div style="padding:28px;background:#ffffff;">
          <table role="presentation" style="width:100%;border-collapse:collapse;">
            <tbody>
              ${fields
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="padding:0 0 14px;vertical-align:top;width:180px;color:#6b7280;font-size:13px;">${escapeHtml(label)}</td>
                      <td style="padding:0 0 14px;vertical-align:top;color:#1f2937;font-size:15px;font-weight:500;">${escapeHtml(value)}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
          <div style="margin-top:18px;padding-top:18px;border-top:1px solid #e8e2d6;">
            <p style="margin:0 0 10px;color:#6b7280;font-size:13px;">Mensagem</p>
            <p style="margin:0;color:#1f2937;white-space:pre-wrap;font-size:15px;line-height:1.6;">${escapeHtml(payload.mensagem)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
