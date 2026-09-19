import { Search, GitCompareArrows, X } from "@/components/icons";
import { useMemo, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { CompareSheet } from "@/components/compare-sheet";
import { GradeCard } from "@/components/grade-card";
import { GradeDetail } from "@/components/grade-detail";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { familyStyle } from "@/lib/family-style";
import { familyMeta, grades } from "@/lib/grades";
import type { Grade, PolymerFamily } from "@/lib/types";
import { cn } from "@/lib/utils";

type FamilyFilter = PolymerFamily | "ALL";

const FAMILY_FILTERS: FamilyFilter[] = ["ALL", "HDPE", "LLDPE", "PP"];

export function Catalog() {
  const [family, setFamily] = useState<FamilyFilter>("ALL");
  const [category, setCategory] = useState("ALL");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const categoryOptions = useMemo(() => {
    const pool = family === "ALL" ? grades : grades.filter((g) => g.family === family);
    return Array.from(new Set(pool.map((g) => g.category))).sort();
  }, [family]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return grades.filter((g) => {
      if (family !== "ALL" && g.family !== family) return false;
      if (category !== "ALL" && g.category !== category) return false;
      if (!q) return true;
      const hay = [
        g.name,
        g.brand,
        g.family,
        g.category,
        g.summary,
        g.applications,
        g.technology,
        g.bis ?? "",
        g.flags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [family, category, query]);

  const openGrade = grades.find((g) => g.id === openId) ?? null;
  const compareGrades = compareIds
    .map((id) => grades.find((g) => g.id === id))
    .filter((g): g is Grade => Boolean(g));

  function toggleCompare(id: string) {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      if (current.length >= 2) return [current[1], id];
      return [...current, id];
    });
  }

  function setFamilyFilter(next: FamilyFilter) {
    setFamily(next);
    setCategory("ALL");
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="no-print sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
                Haldia Petrochemicals
              </p>
              <h1 className="font-display text-lg font-medium leading-tight tracking-tight">
                Halene Grade Book
              </h1>
            </div>
          </div>
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search grades</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-subtle" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search grade, application, BIS…"
              className="pl-10"
            />
          </label>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6">
        <section className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
            Technical data · two-up sheets
          </p>
          <p className="mt-2 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
            HDPE, LLDPE and PP grades
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">
            Typical properties, processing windows and BIS codes for every Halene H,
            Halene L and Halene P sheet in the ARDC book — {grades.length} grades,
            shown two columns across.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(["HDPE", "LLDPE", "PP"] as PolymerFamily[]).map((key) => {
            const meta = familyMeta[key];
            const tone = familyStyle[key];
            const active = family === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFamilyFilter(active ? "ALL" : key)}
                className={cn(
                  "rounded-md border px-4 py-4 text-left transition-colors duration-150",
                  active ? tone.badge : "border-border bg-bg-elevated hover:bg-bg",
                )}
              >
                <p className={cn("text-xs font-medium uppercase tracking-wide", active ? "text-accent-fg/80" : "text-fg-muted")}>
                  {meta.brand}
                </p>
                <p className="mt-1 font-display text-xl font-medium">{meta.full}</p>
                <p className={cn("mt-2 text-sm", active ? "text-accent-fg/80" : "text-fg-muted")}>
                  {meta.count} grades
                </p>
              </button>
            );
          })}
        </section>

        <section className="no-print mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {FAMILY_FILTERS.map((key) => {
              const active = family === key;
              const label = key === "ALL" ? "All" : familyMeta[key].label;
              const count = key === "ALL" ? grades.length : familyMeta[key].count;
              return (
                <Button
                  key={key}
                  type="button"
                  variant={active ? "ink" : "outline"}
                  onClick={() => setFamilyFilter(key)}
                  aria-pressed={active}
                >
                  {label}
                  <span className="font-mono text-xs tabular-nums opacity-70">{count}</span>
                </Button>
              );
            })}
          </div>
          <label className="sm:ml-auto">
            <span className="sr-only">Filter by application</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 min-w-56 rounded-sm border border-border bg-bg-elevated px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="ALL">All applications</option>
              {categoryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </section>

        <p className="mt-6 text-sm text-fg-muted">
          {visible.length} sheet{visible.length === 1 ? "" : "s"}
          {family !== "ALL" ? ` · ${familyMeta[family].brand}` : ""}
          {category !== "ALL" ? ` · ${category}` : ""}
        </p>

        {visible.length === 0 ? (
          <div className="mt-10 rounded-md border border-dashed border-border-strong bg-bg-elevated px-6 py-16 text-center">
            <p className="font-display text-xl text-fg">No grades match</p>
            <p className="mt-2 text-sm text-fg-muted">Clear search or pick another family.</p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={() => {
                setQuery("");
                setFamilyFilter("ALL");
              }}
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {visible.map((grade) => (
              <GradeCard
                key={grade.id}
                grade={grade}
                selected={compareIds.includes(grade.id)}
                onOpen={() => setOpenId(grade.id)}
                onCompare={() => toggleCompare(grade.id)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="no-print border-t border-border px-4 py-8 text-center text-xs leading-relaxed text-fg-subtle sm:px-6">
        Typical values of representative samples, compiled from Haldia Petrochemicals
        ARDC technical data sheets. Not a specification. Halene H, Halene L and Halene P
        are registered trademarks of Haldia Petrochemicals Limited.
      </footer>

      {compareGrades.length > 0 ? (
        <div className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg-ink text-accent-fg">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
            <GitCompareArrows className="size-4 shrink-0" />
            <p className="min-w-0 flex-1 text-sm">
              {compareGrades.map((g) => g.name).join("  ·  ")}
              {compareGrades.length === 1 ? " — pick a second grade" : ""}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-accent-fg/30 bg-transparent text-accent-fg hover:bg-accent-fg/10"
              disabled={compareGrades.length !== 2}
              onClick={() => setCompareOpen(true)}
            >
              Compare sheets
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-accent-fg hover:bg-accent-fg/10"
              onClick={() => setCompareIds([])}
              aria-label="Clear comparison"
            >
              <X />
            </Button>
          </div>
        </div>
      ) : null}

      <Dialog open={Boolean(openGrade)} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="p-0">
          {openGrade ? <GradeDetail grade={openGrade} /> : null}
        </DialogContent>
      </Dialog>

      <Dialog open={compareOpen} onOpenChange={setCompareOpen}>
        <DialogContent className="p-0">
          {compareGrades.length === 2 ? (
            <CompareSheet left={compareGrades[0]} right={compareGrades[1]} />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
