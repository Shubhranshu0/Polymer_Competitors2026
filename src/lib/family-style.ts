import type { PolymerFamily } from "./types";

export const familyStyle: Record<
  PolymerFamily,
  { bar: string; badge: string; soft: string; text: string; border: string }
> = {
  HDPE: {
    bar: "bg-hdpe",
    badge: "bg-hdpe text-accent-fg",
    soft: "bg-hdpe-soft text-hdpe",
    text: "text-hdpe",
    border: "border-hdpe",
  },
  LLDPE: {
    bar: "bg-lldpe",
    badge: "bg-lldpe text-accent-fg",
    soft: "bg-lldpe-soft text-lldpe",
    text: "text-lldpe",
    border: "border-lldpe",
  },
  PP: {
    bar: "bg-pp",
    badge: "bg-pp text-accent-fg",
    soft: "bg-pp-soft text-pp",
    text: "text-pp",
    border: "border-pp",
  },
};
