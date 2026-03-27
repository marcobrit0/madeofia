import Link from "next/link";
import homeStyles from "@/app/page.module.css";

const ARROW_ICON = "https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png";

type ButtonVariant = "primary" | "secondary" | "plan" | "submit";

const variantClassMap: Record<ButtonVariant, string> = {
  primary: homeStyles.primaryButton,
  secondary: homeStyles.secondaryButton,
  plan: homeStyles.planButton,
  submit: homeStyles.submitButton,
};

function ButtonInner({
  label,
  showArrow = false,
}: {
  label: string;
  showArrow?: boolean;
}) {
  return (
    <>
      <span className={homeStyles.ctaGlow} aria-hidden="true" />
      <span className={homeStyles.ctaBorder} aria-hidden="true" />
      <span className={homeStyles.ctaFill} aria-hidden="true" />
      <span className={homeStyles.ctaContent}>
        <span className={homeStyles.ctaLabelText}>{label}</span>
        {showArrow ? (
          <span className={homeStyles.ctaIcon}>
            <img
              className={homeStyles.buttonArrow}
              src={ARROW_ICON}
              alt=""
              aria-hidden="true"
            />
          </span>
        ) : null}
      </span>
    </>
  );
}

export function NebulaLinkButton({
  href,
  label,
  variant = "primary",
  showArrow = false,
  className = "",
}: {
  href: string;
  label: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variantClassMap[variant]} ${homeStyles.ctaButton} ${className}`.trim()}
    >
      <ButtonInner label={label} showArrow={showArrow} />
    </Link>
  );
}

export function NebulaSubmitButton({
  label,
  className = "",
  disabled = false,
}: {
  label: string;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${variantClassMap.submit} ${homeStyles.ctaButton} ${className}`.trim()}
    >
      <ButtonInner label={label} />
    </button>
  );
}
