/**
 * Renders a JSON-LD block. Server component — the markup ships in the static
 * HTML, which matters because most crawlers that read structured data do not
 * execute JavaScript.
 */
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      // The payload is built from our own constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
