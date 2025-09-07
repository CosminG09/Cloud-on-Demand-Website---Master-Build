"use client";

// src/components/forms/NewsletterInline.tsx
// Simple inline email capture with pill input + blue button.
// Actual submit wiring can be added later (Step 6).

import { useId, useState, FormEvent } from "react";
import { BrandButton } from "@/components/ui/BrandButton";

export default function NewsletterInline() {
  const id = useId();
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to backend / marketing tool in Step 6
    console.log("Subscribe:", email);
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="rounded-2xl border bg-card p-6 shadow-soft-sm"
    >
      <h2 id={`${id}-title`} className="text-h3 font-semibold mb-2">
        Fii primul care află când lansăm
      </h2>
      <p className="text-body text-muted-foreground mb-4">
        Lasă-ne adresa de email și te anunțăm imediat ce site-ul este live.
      </p>

      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-11 w-full rounded-full border bg-background px-4 outline-none ring-0 sm:flex-1"
        />
        <BrandButton className="rounded-full h-11 px-6" type="submit">
          Anunță-mă
        </BrandButton>
      </form>

      <p className="mt-2 text-small text-muted-foreground">
        Respectăm inboxul tău. Te poți dezabona oricând.
      </p>
    </section>
  );
}
