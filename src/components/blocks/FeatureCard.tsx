// src/components/blocks/FeatureCard.tsx
// PURPOSE: Marketing/service card built on top of shadcn/ui Card atoms.
// WHY: Preserve the primitive Card API (used elsewhere) while providing
//      a higher-level card with image/eyebrow/excerpt/CTA ready for pages.

import Image from "next/image";
import clsx from "clsx";
import {
  Card,            // primitive shell
  CardHeader,      // spacing block for title/eyebrow
  CardContent,     // body/excerpt
  CardFooter,      // CTA area
  CardTitle,       // title typography
  CardDescription, // smaller/secondary text
} from "@/components/ui/card";
import { BrandButton } from "@/components/ui/BrandButton";

export interface FeatureCardProps {
  image?: { src: string; alt: string };
  eyebrow?: string;                 // small tag above title
  title: string;                    // required
  excerpt?: string;                 // optional copy
  cta?: { label: string; href?: string; onClick?: () => void }; // one CTA
  compact?: boolean;                // tighter image height
  className?: string;               // extra classes
}

export default function FeatureCard({
  image,
  eyebrow,
  title,
  excerpt,
  cta,
  compact,
  className,
}: FeatureCardProps) {
  return (
    <Card className={clsx("motion-safe:anim-fade shadow-soft-sm", className)}>
      {/* Optional image header (cover) */}
      {image ? (
        <div
          className={clsx(
            "relative w-full overflow-hidden rounded-t-xl",
            compact ? "h-32" : "h-44" // reserve height to avoid CLS
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      ) : null}

      {/* Text stack */}
      <CardHeader className="space-y-2">
        {eyebrow ? (
          <p className="text-small text-muted-foreground">{eyebrow}</p>
        ) : null}
        {/* Use primitive CardTitle to keep consistent typography */}
        <CardTitle className="section-head">{title}</CardTitle>
      </CardHeader>

      {/* Excerpt / body */}
      {excerpt ? (
        <CardContent>
          <CardDescription className="text-body text-muted-foreground">
            {excerpt}
          </CardDescription>
        </CardContent>
      ) : null}

      {/* CTA zone (button or link) */}
      {cta ? (
        <CardFooter>
          {cta.href ? (
            // a simple anchor keeps this component unopinionated
            <a href={cta.href} className="inline-flex">
              <BrandButton>{cta.label}</BrandButton>
            </a>
          ) : (
            <BrandButton onClick={cta.onClick}>{cta.label}</BrandButton>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );
}
