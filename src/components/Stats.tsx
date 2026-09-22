import { Counter } from "@/components/ui/Counter";

export type Stat = {
  /** Numeric stats count up; string stats (e.g. "★★★★★") render as-is. */
  value: number | string;
  suffix?: string;
  label: string;
};

type StatsProps = {
  items: readonly Stat[];
  className?: string;
  bordered?: boolean;
};

export function Stats({
  items,
  className = "",
  bordered = true,
}: StatsProps) {
  return (
    <dl
      className={`flex flex-wrap gap-x-5 gap-y-6 sm:gap-10 ${
        bordered ? "border-t border-ink-border pt-8" : ""
      } ${className}`.trim()}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <strong className="block font-heading text-2xl font-semibold text-gold sm:text-[1.75rem]">
              {typeof item.value === "number" ? (
                <Counter value={item.value} suffix={item.suffix} />
              ) : (
                item.value
              )}
            </strong>
            <span className="text-xs uppercase tracking-[0.05em] text-muted sm:text-[0.8125rem]">
              {item.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
