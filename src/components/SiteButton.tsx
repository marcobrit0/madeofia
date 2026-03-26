import Link from "next/link";
import homeStyles from "@/app/page.module.css";

type Variant = "primary" | "secondary" | "submit" | "buy";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: Variant;
};

type SubmitButtonProps = {
  label: string;
  variant?: Variant;
  disabled?: boolean;
};

function variantClassName(variant: Variant) {
  switch (variant) {
    case "secondary":
      return homeStyles.secondaryButton;
    case "submit":
      return homeStyles.submitButton;
    case "buy":
      return homeStyles.buyButton;
    default:
      return homeStyles.primaryButton;
  }
}

function ButtonInner({ label }: { label: string }) {
  return (
    <>
      <span className={homeStyles.ctaGlow} aria-hidden="true" />
      <span className={homeStyles.ctaBorder} aria-hidden="true" />
      <span className={homeStyles.ctaFill} aria-hidden="true" />
      <span className={homeStyles.ctaContent}>
        <span className={homeStyles.ctaLabelText}>{label}</span>
      </span>
    </>
  );
}

export function LinkButton({
  href,
  label,
  variant = "primary",
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${variantClassName(variant)} ${homeStyles.ctaButton}`}>
      <ButtonInner label={label} />
    </Link>
  );
}

export function SubmitButton({
  label,
  variant = "submit",
  disabled,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${variantClassName(variant)} ${homeStyles.ctaButton}`}
    >
      <ButtonInner label={label} />
    </button>
  );
}
