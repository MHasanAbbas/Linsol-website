import { HealthCheckCta } from "@/app/_components/health-check-cta";
import { HeroSection } from "@/app/_components/hero-section";
import { ProblemsSection } from "@/app/_components/problems-section";
import { ServicesSection } from "@/app/_components/services-section";
import { TechnologiesSection } from "@/app/_components/technologies-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <ProblemsSection />
      <TechnologiesSection />
      <HealthCheckCta />
    </main>
  );
}
