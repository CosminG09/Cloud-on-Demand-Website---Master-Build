import React from "react";

export default { title: "Foundation/Animations" };

export const Utilities = () => (
  <div className="container mx-auto p-8 space-y-6">
    <div className="rounded-2xl p-6 border bg-card motion-safe:animate-brand-fade-in">
      <h3 className="section-head">Fade-in</h3>
      <p className="text-sm text-muted-foreground">Se estompează la montare cu <code>animate-brand-fade-in</code>.</p>
    </div>

    <div className="rounded-2xl p-6 border bg-card space-y-4">
      <button className="motion-safe:animate-brand-pulse rounded-2xl px-5 py-3 bg-brand-primary text-white shadow-soft-md">
        Programează o consultanță
      </button>
      <div className="flex items-center gap-4">
        <div className="motion-safe:anim-pulse w-6 h-6 rounded-full bg-brand-primary shadow-soft-md" />
        <p className="text-sm text-muted-foreground">Punct pulsator folosind <code>.anim-pulse</code>.</p>
      </div>
    </div>

    <div className="rounded-2xl p-6 border bg-card">
      <div className="motion-safe:animate-brand-sync inline-flex items-center gap-2">
        <span className="text-2xl">⌄</span>
        <span>Derulează</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">Mișcare ușoară pe axa Y cu <code>animate-brand-sync</code>.</p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl p-6 border bg-card motion-safe:anim-fade">
        <h3 className="section-head">.anim-fade</h3>
        <p className="text-sm text-muted-foreground">Folosește var(--anim-normal) & var(--ease-emphasized).</p>
      </div>
      <div className="rounded-2xl p-6 border bg-card motion-safe:anim-pulse">
        <h3 className="section-head">.anim-pulse</h3>
        <p className="text-sm text-muted-foreground">Alternanță subtilă a opacității (var(--anim-slow)).</p>
      </div>
      <div className="rounded-2xl p-6 border bg-card motion-safe:anim-sync">
        <h3 className="section-head">.anim-sync</h3>
        <p className="text-sm text-muted-foreground">Mișcare blândă transform: translateY.</p>
      </div>
    </div>
  </div>
);
