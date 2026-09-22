import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  /** The gold divider is omitted on a few sections in the original design. */
  rule?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  rule = true,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 text-center">
      <span className="mb-3 inline-block text-xs uppercase tracking-[0.15em] text-gold sm:tracking-[0.25em]">
        {label}
      </span>
      <h2 className="mb-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-cream">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-[640px] text-muted">{description}</p>
      ) : null}
      {rule ? <div className="rule-gold mx-auto mt-4" /> : null}
    </Reveal>
  );
}
