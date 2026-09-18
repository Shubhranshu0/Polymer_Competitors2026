import { familyStyle } from "@/lib/family-style";
import type { Grade } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CompareTable, ProcessTable } from "@/components/prop-table";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function CompareSheet({ left, right }: { left: Grade; right: Grade }) {
  return (
    <div className="print-sheet flex min-h-0 flex-1 flex-col overflow-hidden">
      <header className="shrink-0 border-b border-border bg-bg px-5 py-4 pr-14 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
          Side-by-side sheets
        </p>
        <DialogTitle className="mt-1 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
          {left.name} and {right.name}
        </DialogTitle>
        <DialogDescription className="mt-1 text-sm text-fg-muted">
          Differing typical values are marked in red.
        </DialogDescription>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CompareHead grade={left} />
          <CompareHead grade={right} />
        </div>

        <section className="print-break mt-6 rounded-md border border-border bg-bg px-4 py-3">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
            Typical properties
          </h3>
          <CompareTable
            left={left.properties}
            right={right.properties}
            leftName={left.name}
            rightName={right.name}
          />
        </section>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <section className="print-break rounded-md border border-border bg-bg px-4 py-3">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
              Processing · {left.name}
            </h3>
            <ProcessTable rows={left.processing} />
          </section>
          <section className="print-break rounded-md border border-border bg-bg px-4 py-3">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
              Processing · {right.name}
            </h3>
            <ProcessTable rows={right.processing} />
          </section>
        </div>
      </div>
    </div>
  );
}

function CompareHead({ grade }: { grade: Grade }) {
  const tone = familyStyle[grade.family];
  return (
    <div className="rounded-md border border-border bg-bg p-4">
      <span className={cn("rounded-xs px-2 py-1 text-xs font-medium uppercase tracking-wide", tone.soft)}>
        {grade.family}
      </span>
      <h3 className="mt-2 font-display text-xl font-medium text-fg">{grade.name}</h3>
      <p className="mt-1 text-sm text-fg-muted">{grade.category}</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-fg-subtle">MFI</dt>
          <dd className="font-mono tabular-nums">{grade.mfi}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-fg-subtle">Density</dt>
          <dd className="font-mono tabular-nums">{grade.density}</dd>
        </div>
      </dl>
      {grade.bis ? <p className="mt-2 font-mono text-xs text-fg-muted">{grade.bis}</p> : null}
    </div>
  );
}
