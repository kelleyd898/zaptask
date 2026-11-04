import type { ReactNode } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string | undefined; optional?: boolean; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

/** Hidden honeypot input; bots fill it, people don't. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function FormStatus({ status, message }: { status: "success" | "error"; message: string }) {
  const ok = status === "success";
  return (
    <div role="status" className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${ok ? "border-success/30 bg-success/5 text-foreground" : "border-destructive/30 bg-destructive/5 text-destructive"}`}>
      {ok ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" /> : <AlertCircle className="mt-0.5 size-4 shrink-0" />}
      <p>{message}</p>
    </div>
  );
}

export function fieldErrors(issues: { path: (string | number)[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const k = String(i.path[0]);
    if (!out[k]) out[k] = i.message;
  }
  return out;
}
