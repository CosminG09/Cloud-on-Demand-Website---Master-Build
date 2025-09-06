"use client";

import { useEffect, useState } from "react";

export default function AnimationsLab() {
  const [off, setOff] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-anim", off);
  }, [off]);

  return (
    <main className="container mx-auto py-18 space-y-10">
      {/* Reserve vertical space so heading font swap can't shift layout */}
      <header className="space-y-3 min-h-[140px]">
        <h1>Laborator de animații</h1>
        <p className="lead">
          Utilitare accesibile: pulse, fade, sync. Respectă <code>prefers-reduced-motion</code> și acceptă oprire locală.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={off}
              onChange={(e) => setOff(e.target.checked)}
            />
            <span>Oprește animațiile (kill-switch local)</span>
          </label>

          <button
            className="rounded-2xl px-4 py-2 border bg-card shadow-soft-sm hover:bg-muted"
            onClick={() => setFadeKey((k) => k + 1)}
          >
            Repornește Fade
          </button>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {/* Reserve height for each card so content doesn’t push siblings */}
        <div
          key={fadeKey}
          className="rounded-2xl p-6 border bg-card motion-safe:anim-fade [--anim-normal:900ms] min-h-[160px]"
        >
          <h3 className="section-head">Fade-in (mai vizibil)</h3>
          <p>
            Se estompează la montare folosind <code>.anim-fade</code> și un override{" "}
            <code>[--anim-normal:900ms]</code>. Apasă <em>Repornește Fade</em> pentru a vedea efectul din nou.
          </p>
        </div>

        <div className="rounded-2xl p-6 border bg-card space-y-4 min-h-[160px]">
          <button className="motion-safe:animate-brand-pulse rounded-2xl px-5 py-3 bg-brand-primary text-white shadow-soft-md">
            Programează o consultanță
          </button>
          <div className="flex items-center gap-4">
            <div className="motion-safe:anim-pulse w-6 h-6 rounded-full bg-brand-primary shadow-soft-md" />
            <p className="text-sm text-muted-foreground">
              Punctul pulsează cu <code>.anim-pulse</code>.
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-6 border bg-card min-h-[160px]">
          <div className="motion-safe:animate-brand-sync inline-flex items-center gap-2">
            <span className="text-2xl">⌄</span>
            <span>Derulează</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Folosește <code>animate-brand-sync</code> (mișcare ușoară pe axa Y).
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl p-6 border bg-card motion-safe:anim-fade min-h-[160px]">
          <h3 className="section-head">.anim-fade</h3>
          <p>Variante semantică: <code>var(--anim-normal)</code> &amp; <code>var(--ease-emphasized)</code>.</p>
        </div>
        <div className="rounded-2xl p-6 border bg-card motion-safe:anim-pulse min-h-[160px]">
          <h3 className="section-head">.anim-pulse</h3>
          <p>Alternanță subtilă a opacității, folosind <code>var(--anim-slow)</code>.</p>
        </div>
        <div className="rounded-2xl p-6 border bg-card motion-safe:anim-sync min-h-[160px]">
          <h3 className="section-head">.anim-sync</h3>
          <p>Mișcare blândă <em>up/down</em> (transform), sigură pentru performanță.</p>
        </div>
      </section>
    </main>
  );
}
