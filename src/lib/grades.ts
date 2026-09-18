import type { Grade, PolymerFamily } from "./types";
import { hdpeGrades } from "./grades-hdpe";
import { lldpeGrades } from "./grades-lldpe";
import { ppGrades } from "./grades-pp";

export const grades: Grade[] = [...hdpeGrades, ...lldpeGrades, ...ppGrades];

export const familyMeta: Record<
  PolymerFamily,
  { label: string; full: string; brand: string; count: number; tone: string }
> = {
  HDPE: {
    label: "HDPE",
    full: "High-Density Polyethylene",
    brand: "Halene H",
    count: hdpeGrades.length,
    tone: "hdpe",
  },
  LLDPE: {
    label: "LLDPE",
    full: "Linear Low-Density Polyethylene",
    brand: "Halene L",
    count: lldpeGrades.length,
    tone: "lldpe",
  },
  PP: {
    label: "PP",
    full: "Polypropylene",
    brand: "Halene P",
    count: ppGrades.length,
    tone: "pp",
  },
};

export function gradeById(id: string): Grade | undefined {
  return grades.find((g) => g.id === id);
}

export const categories = Array.from(new Set(grades.map((g) => g.category))).sort();
