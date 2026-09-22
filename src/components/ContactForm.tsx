"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { eventTypes } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

const fieldClasses =
  "w-full rounded border border-ink-border bg-ink-soft px-4 py-3.5 text-[0.9375rem] text-cream transition-colors duration-400 outline-none placeholder:text-muted/70 focus:border-gold";

const labelClasses =
  "mb-2 block text-[0.8125rem] uppercase tracking-[0.06em] text-muted";

/**
 * There is no backend. The form composes a WhatsApp message from the fields and
 * hands the visitor off to wa.me — exactly what the legacy script did, kept
 * because it is how the agency actually receives enquiries.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Shiv Ram Event,",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Event Type: ${data.get("eventType")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener");
    setSent(true);
  }

  return (
    <div className="rounded-lg border border-ink-border bg-ink-card p-6 sm:p-8">
      <h3 className="mb-6 font-heading text-xl font-semibold text-gold-light">
        Send an Inquiry
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="eventType" className={labelClasses}>
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            defaultValue=""
            className={fieldClasses}
          >
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your event..."
            className={`${fieldClasses} min-h-[120px] resize-y`}
          />
        </div>

        <Button type="submit" className="min-h-12 w-full">
          Send via WhatsApp
        </Button>

        <p
          aria-live="polite"
          className="text-center text-[0.8125rem] text-muted"
        >
          {sent
            ? `WhatsApp should have opened in a new tab. If it didn't, call us on ${site.phoneDisplay}.`
            : "This opens WhatsApp with your details filled in."}
        </p>
      </form>
    </div>
  );
}
