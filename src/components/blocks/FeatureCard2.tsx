// src/components/blocks/FeatureCard.tsx
// Adds a color "badge" that matches each service theme (blue/yellow/purple/green)

import Image from "next/image";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrandButton } from "@/components/ui/BrandButton";

type Theme = "m365" | "power" | "azure" | "dynamics" | "none";

export interface FeatureCardProps {
  image?: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  excerpt?: string;
  cta?: { label: string; href?: string; onClick?: () => void };
  compact?: boolean;
  theme?: Theme;          // <— NEW: service accent color
  className?: string;
}

export default function FeatureCard({
  image,
  eyebrow,
  title,
  excerpt,
  cta,
  compact,
  theme = "none",
  className,
}: FeatureCardProps) {
  return (
    <Card className={clsx("motion-safe:anim-fade shadow-soft-sm", className)}>
      {/* Cover image (optional) */}
      {image ? (
        <div
          className={clsx(
            "relative w-full overflow-hidden rounded-t-xl",
            compact ? "h-32" : "h-44"
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

      <CardHeader className="space-y-3">
        {/* Service badge — square, rounded, colored */}
        {theme !== "none" ? (
          <div
            aria-hidden
            className={clsx(
              "h-10 w-10 rounded-2xl shadow-soft-sm",
              {
                "bg-service-m365": theme === "m365",
                "bg-service-power": theme === "power",
                "bg-service-azure": theme === "azure",
                "bg-service-dynamics": theme === "dynamics",
              }
            )}
          />
        ) : null}

        {eyebrow ? (
          <p className="text-small text-muted-foreground">{eyebrow}</p>
        ) : null}

        <CardTitle className="section-head">{title}</CardTitle>
      </CardHeader>

      {excerpt ? (
        <CardContent>
          <CardDescription className="text-body text-muted-foreground">
            {excerpt}
          </CardDescription>
        </CardContent>
      ) : null}

      {cta ? (
        <CardFooter>
          {cta.href ? (
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
