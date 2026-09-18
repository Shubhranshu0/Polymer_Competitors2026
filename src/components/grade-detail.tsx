import { Printer } from "lucide-react";
import { familyStyle } from "@/lib/family-style";
import type { Grade } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProcessTable, PropTable } from "@/components/prop-table";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function GradeDetail({ grade }: { grade: Grade }) {
  const tone = familyStyle[grade.family];

  return (
    <div className="print-sheet flex min-h-0 flex-1 flex-col overflow-hidden">
      <header className="shrink-0 border-b border-border bg-bg px-5 py-4 pr-14 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
              Technical data sheet
            </p>
            <DialogTitle className="mt-1 font-display text-3xl font-medium tracking-tight text-fg">
              {grade.name}
            </DialogTitle>
            <DialogDescription className="mt-1 text-sm text-fg-muted">
              {grade.brand} · {grade.family} · {grade.technology}
            </DialogDescription>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("rounded-xs px-3 py-1.5 text-xs font-medium uppercase tracking-wide", tone.badge)}>
              {grade.brand}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="no-print"
              onClick={() => window.print()}
            >
              <Printer />
              Print
            </Button>
          </div>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
        <p className="max-w-3xl text-sm leading-relaxed text-fg">{grade.summary}</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
          Recommended for {grade.applications}.
        </p>
        {grade.bis ? (
          <p className="mt-3 font-mono text-xs text-fg">
            BIS designation · {grade.bis}
          </p>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="print-break rounded-md border border-border bg-bg px-4 py-3">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
              Typical properties
            </h3>
            <PropTable rows={grade.properties} />
          </section>
          <section className="print-break flex flex-col gap-6">
            <div className="rounded-md border border-border bg-bg px-4 py-3">
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
                Suggested processing
              </h3>
              <ProcessTable rows={grade.processing} />
            </div>
            <div className="rounded-md border border-border bg-bg px-4 py-3">
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
                Application
              </h3>
              <p className="text-sm leading-relaxed text-fg">{grade.applications}</p>
              <p className="mt-2 text-sm text-fg-muted">
                {grade.category} · {grade.technology}
              </p>
            </div>
            {grade.flags.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {grade.flags.map((flag) => (
                  <li
                    key={flag}
                    className="rounded-xs border border-border bg-bg px-2 py-1 text-xs text-fg-muted"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-fg-subtle">
          Typical values of representative samples — not a specification of supplied
          product. Mechanical properties follow the specimen method noted on the
          originating ARDC sheet. Not recommended for Single Use Plastic items listed
          under the Plastics Waste Management Rules. Compliance certificates and MSDS
          on request.
        </p>
      </div>
    </div>
  );
}
