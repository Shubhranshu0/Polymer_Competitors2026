import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm border border-border bg-bg-elevated px-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors duration-150 focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}
