import { Button } from "./Button";
import { Reveal } from "./Reveal";

type Action = {
  label: string;
  href: string;
  variant?: "gold" | "outline";
};

type CtaBannerProps = {
  heading: string;
  text: string;
  actions: Action[];
};

export function CtaBanner({ heading, text, actions }: CtaBannerProps) {
  return (
    <section className="border-y border-ink-border bg-ink-soft bg-[linear-gradient(135deg,rgba(154,123,60,0.15),rgba(10,10,10,0.95))] py-12 text-center sm:py-16">
      <div className="shell">
        <Reveal direction="scale">
          <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-cream">
            {heading}
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-muted">{text}</p>
          <div className="flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:justify-center min-[420px]:gap-4">
            {actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant ?? "outline"}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
