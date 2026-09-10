import type { BlogBlock } from "@/lib/data";

export function ArticleContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="font-display pt-3 text-xl leading-tight tracking-tight text-ink md:text-2xl"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className="text-sm leading-relaxed text-muted md:text-base">
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={index} className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="my-8 rounded-xl border-l-4 border-accent bg-surface-soft px-6 py-5 font-display text-lg  leading-snug tracking-tight text-ink md:text-xl"
              >
                “{block.text}”
                {block.cite && (
                  <cite className="mt-3 block font-sans text-sm font-medium not-italic text-muted">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );

          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-xl border border-border bg-ink px-5 py-4 text-sm leading-relaxed text-white/90"
              >
                <code>{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
