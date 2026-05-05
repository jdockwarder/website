import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

interface Props {
  tone?: 'info' | 'warn';
  title?: string;
  children: ComponentChildren;
}

export default function Callout({ tone = 'info', title, children }: Props) {
  const [open, setOpen] = useState(true);

  const palette =
    tone === 'warn'
      ? 'bg-amber-50 border-amber-200 text-amber-900'
      : 'bg-neutral-50 border-neutral-200 text-neutral-800';

  return (
    <aside class={`my-6 rounded-2xl border p-5 ${palette}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        class="flex items-baseline gap-2 text-sm font-mono uppercase tracking-wide cursor-pointer"
      >
        <span aria-hidden="true">{open ? '▾' : '▸'}</span>
        <span>{title ?? (tone === 'warn' ? 'Heads up' : 'Note')}</span>
      </button>
      {open && <div class="mt-3 text-pretty">{children}</div>}
    </aside>
  );
}
