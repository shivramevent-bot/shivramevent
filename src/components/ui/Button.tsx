import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "gold" | "outline";

const base =
  "relative z-[1] inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[4px] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] leading-none transition-[transform,box-shadow,background,color] duration-[500ms] ease-soft active:translate-y-[-1px] active:scale-[0.99]";

const variants: Record<Variant, string> = {
  /* Gold fill with a light sweep that crosses the button on hover. */
  gold: [
    "bg-[linear-gradient(135deg,var(--color-gold-dark),var(--color-gold),var(--color-gold-light))] text-ink",
    "shadow-[0_4px_18px_rgba(197,160,89,0.25),0_0_0_1px_rgba(212,175,55,0.3)]",
    "hover:translate-y-[-3px] hover:scale-[1.03] hover:text-ink",
    "hover:shadow-[0_10px_30px_rgba(212,175,55,0.45),0_0_20px_rgba(197,160,89,0.35)]",
    "before:absolute before:inset-y-0 before:left-[-100%] before:z-[1] before:w-full",
    "before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)]",
    "before:transition-[left] before:duration-[900ms] before:ease-glide",
    "hover:before:left-full",
  ].join(" "),

  /* Transparent until hover, when a gold fill wipes in from the left. */
  outline: [
    "border border-gold bg-transparent text-gold",
    "shadow-[0_0_12px_rgba(197,160,89,0.1)]",
    "hover:translate-y-[-3px] hover:scale-[1.02] hover:border-gold-light hover:text-ink",
    "hover:shadow-[0_8px_24px_rgba(197,160,89,0.35),0_0_15px_rgba(212,175,55,0.25)]",
    "before:absolute before:inset-0 before:z-[-1] before:origin-right before:scale-x-0",
    "before:bg-[linear-gradient(135deg,var(--color-gold-dark),var(--color-gold))]",
    "before:transition-transform before:duration-[500ms] before:ease-soft",
    "hover:before:origin-left hover:before:scale-x-100",
  ].join(" "),
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "gold",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
