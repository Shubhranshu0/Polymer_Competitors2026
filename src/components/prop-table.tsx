import type { ProcessRow, PropRow } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PropTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted">
          <th className="py-2 pr-3 font-medium">Property</th>
          <th className="py-2 pr-3 font-medium">Unit</th>
          <th className="py-2 text-right font-medium">Typical</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-border last:border-0">
            <td className="py-2 pr-3 align-top text-fg">
              {row.label}
              {row.method ? (
                <div className="text-xs text-fg-muted">{row.method}</div>
              ) : null}
            </td>
            <td className="py-2 pr-3 align-top whitespace-nowrap text-fg-muted">{row.unit}</td>
            <td className="py-2 text-right align-top font-mono tabular-nums text-fg">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ProcessTable({ rows }: { rows: ProcessRow[] }) {
  if (rows.length === 0) return null;
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted">
          <th className="py-2 pr-3 font-medium">Condition</th>
          <th className="py-2 text-right font-medium">Window</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-border last:border-0">
            <td className="py-2 pr-3 text-fg">{row.label}</td>
            <td className="py-2 text-right font-mono tabular-nums text-fg">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CompareTable({
  left,
  right,
  leftName,
  rightName,
}: {
  left: PropRow[];
  right: PropRow[];
  leftName: string;
  rightName: string;
}) {
  const labels = Array.from(
    new Set([...left.map((r) => r.label), ...right.map((r) => r.label)]),
  );
  const leftMap = new Map(left.map((r) => [r.label, r]));
  const rightMap = new Map(right.map((r) => [r.label, r]));

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-fg-muted">
          <th className="py-2 pr-3 font-medium">Property</th>
          <th className="py-2 pr-3 text-right font-medium">{leftName}</th>
          <th className="py-2 text-right font-medium">{rightName}</th>
        </tr>
      </thead>
      <tbody>
        {labels.map((label) => {
          const a = leftMap.get(label);
          const b = rightMap.get(label);
          const differ = Boolean(a && b && a.value !== b.value);
          return (
            <tr key={label} className="border-b border-border last:border-0">
              <td className="py-2 pr-3 align-top">
                <div>{label}</div>
                <div className="text-xs text-fg-muted">
                  {a?.unit ?? b?.unit ?? ""}
                  {a?.method || b?.method ? ` · ${a?.method ?? b?.method}` : ""}
                </div>
              </td>
              <td
                className={cn(
                  "py-2 pr-3 text-right align-top font-mono tabular-nums",
                  differ && "font-medium text-hdpe",
                )}
              >
                {a?.value ?? "—"}
              </td>
              <td
                className={cn(
                  "py-2 text-right align-top font-mono tabular-nums",
                  differ && "font-medium text-hdpe",
                )}
              >
                {b?.value ?? "—"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
