import type { Edition } from "@/content/types";

type ColophonProps = {
  colophon: Edition["colophon"];
};

export function Colophon({ colophon }: ColophonProps) {
  return (
    <footer className="py-8 text-center">
      <div className="border-t-2 border-ink pt-6">
        {colophon.lines.map((line) => (
          <p
            key={line}
            className="text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            {line}
          </p>
        ))}
      </div>
    </footer>
  );
}
