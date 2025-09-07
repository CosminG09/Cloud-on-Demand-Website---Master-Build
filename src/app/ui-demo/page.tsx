// src/app/ui-demo/page.tsx
import SiteLayout from "@/components/layout/SiteLayout";
import { Container, Grid, Col } from "@/components/layout/Grid";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { CTA } from "@/components/ui/BrandButton";
import FeatureCard from "@/components/blocks/FeatureCard2";
import NewsletterInline from "@/components/forms/NewsletterInline";

export default function UIDemo() {
  return (
    <SiteLayout>
      <HeroSection
        title="Platformă modernă pentru IMM-uri"
        subtitle="Modernizăm operațiunile cu Microsoft 365, Power Platform și Dynamics 365 — rapid, sigur și scalabil."
        primaryCta={<CTA.Consultatie />}
        secondaryCta={<CTA.Demo variant="ghost" />}
      />

      <Container>
        <Grid>
          <Col span={4}>
            <FeatureCard
              theme="m365"
              title="Microsoft 365"
              excerpt="Colaborare și securitate."
              cta={{ label: "Află mai mult", href: "#" }}
            />
          </Col>

          <Col span={4}>
            <FeatureCard
              theme="power"
              title="Power Platform"
              excerpt="Automatizări și aplicații low-code."
              cta={{ label: "Află mai mult", href: "#" }}
            />
          </Col>

          <Col span={4}>
            <FeatureCard
              theme="dynamics"
              title="Dynamics 365"
              excerpt="Procese comerciale integrate."
              cta={{ label: "Află mai mult", href: "#" }}
            />
          </Col>
        </Grid>
      </Container>
      <Container className="my-10">
        <NewsletterInline />
      </Container>

      <CTASection
        title="Gata să începem?"
        copy="Programează o consultație gratuită — evaluăm nevoile și planul de acțiune."
        actions={
          <>
            <CTA.Consultatie />
            <CTA.ROI variant="ghost" />
          </>
        }
        variant="brand"
      />
    </SiteLayout>
  );
}
