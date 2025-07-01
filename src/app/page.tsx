import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { DreamLifestyleSection } from "@/components/sections/dream-lifestyle";
import { SolutionSection } from "@/components/sections/solution";
import { SaasToolsSection } from "@/components/sections/saas-tools";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FAQSection } from "@/components/sections/faq";
import { PricingSection } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <ProblemSection />
      <DreamLifestyleSection />
      <SolutionSection />
      <SaasToolsSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
