export type PolymerFamily = "HDPE" | "LLDPE" | "PP";

export type PropRow = {
  label: string;
  method?: string;
  unit: string;
  value: string;
};

export type ProcessRow = {
  label: string;
  value: string;
};

export type Grade = {
  id: string;
  name: string;
  family: PolymerFamily;
  brand: "Halene H" | "Halene L" | "Halene P";
  technology: string;
  category: string;
  summary: string;
  applications: string;
  bis?: string;
  mfi: string;
  mfiCondition: string;
  density: string;
  properties: PropRow[];
  processing: ProcessRow[];
  flags: string[];
};
