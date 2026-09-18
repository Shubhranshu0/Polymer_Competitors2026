import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-9 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" className="fill-bg-elevated" />
      <rect
        x="1.25"
        y="1.25"
        width="29.5"
        height="29.5"
        rx="5"
        className="fill-none stroke-lldpe"
        strokeWidth="1.5"
      />
      <rect x="8" y="7" width="5" height="18" className="fill-hdpe" />
      <rect x="19" y="7" width="5" height="18" className="fill-hdpe" />
      <rect x="8" y="13.5" width="16" height="5" className="fill-hdpe" />
    </svg>
  );
}
