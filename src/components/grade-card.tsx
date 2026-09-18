import { GitCompareArrows } from "lucide-react";
import { familyStyle } from "@/lib/family-style";
import type { Grade } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function GradeCard({
  grade,
  selected,
  onOpen,
  onCompare,
}: {
  grade: Grade;
  selected: boolean;
  onOpen: () => void;
  onCompare: () => void;
}) {
  const tone = familyStyle[grade.family];

  return (
    <article className="print-break flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-[var(--shadow-sheet)]">
      <div className={cn("h-1.5 w-full", tone.bar)} />
      <div className="flex flex-1 flex-col gap-4 p-5">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
              {grade.brand}
            </p>
            <h2 className="mt-1 font-display text-2xl font-medium tracking-tight text-fg">
              {grade.name}
            </h2>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-xs px-2 py-1 text-xs font-medium uppercase tracking-wide",
              tone.soft,
            )}
          >
            {grade.family}
          </span>
        </header>

        <p className="text-sm font-medium text-fg">{grade.category}</p>
        <p className="line-clamp-2 text-sm leading-relaxed text-fg-muted">{grade.summary}</p>

        <dl className="grid grid-cols-2 gap-3 border-y border-border py-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-fg-subtle">MFI</dt>
            <dd className="mt-1 font-mono text-sm tabular-nums text-fg">
              {grade.mfi}{" "}
              <span className="text-xs text-fg-muted">g/10 min</span>
            </dd>
            <dd className="text-xs text-fg-subtle">{grade.mfiCondition}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-fg-subtle">Density</dt>
            <dd className="mt-1 font-mono text-sm tabular-nums text-fg">
              {grade.density}{" "}
              <span className="text-xs text-fg-muted">g/cm³</span>
            </dd>
            <dd className="text-xs text-fg-subtle">{grade.technology}</dd>
          </div>
        </dl>

        <p className="line-clamp-2 text-sm leading-relaxed text-fg">
          <span className="text-fg-muted">Uses · </span>
          {grade.applications}
        </p>

        {grade.flags.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {grade.flags.slice(0, 3).map((flag) => (
              <li
                key={flag}
                className="rounded-xs border border-border bg-bg px-2 py-1 text-xs text-fg-muted"
              >
                {flag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex gap-2 pt-1">
          <Button type="button" className="flex-1" onClick={onOpen}>
            Open sheet
          </Button>
          <Button
            type="button"
            variant={selected ? "ink" : "outline"}
            className="flex-1"
            onClick={onCompare}
            aria-pressed={selected}
          >
            <GitCompareArrows />
            {selected ? "Selected" : "Compare"}
          </Button>
        </div>
      </div>
    </article>
  );
}
