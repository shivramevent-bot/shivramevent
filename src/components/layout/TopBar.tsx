import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="border-b border-ink-border bg-ink-soft py-1 text-xs sm:py-2 sm:text-[0.8125rem]">
      <div className="shell flex items-center justify-between gap-2">
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-9 items-center text-muted transition-colors hover:text-gold sm:min-h-0"
          >
            ☎ {site.phoneDisplay}
          </a>
          {/* The phone number alone fills the strip on a 320px screen, and
              wrapping it pushed the bar to two lines. */}
          <a
            href={site.emailHref}
            className="hidden min-h-9 items-center text-muted transition-colors hover:text-gold min-[420px]:inline-flex sm:min-h-0"
          >
            ✉ {site.email}
          </a>
        </div>

        {/* Hidden below 768px in the original layout. */}
        <div className="hidden flex-wrap items-center gap-5 md:flex">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener"
            className="text-muted transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener"
            className="text-muted transition-colors hover:text-gold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
