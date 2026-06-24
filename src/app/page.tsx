import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { SolutionSection } from "@/components/sections/Solution";
import { ComparisonSection } from "@/components/sections/Comparison";
import { ShowcaseSection } from "@/components/sections/Showcase";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { SimulatorJourneySection } from "@/components/sections/SimulatorJourney";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ConsultantSection } from "@/components/sections/Consultant";
import { FAQSection } from "@/components/sections/FAQ";
import { LeadCaptureSection } from "@/components/sections/LeadCapture";
import { CTASection } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ComparisonSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <SimulatorJourneySection />
      <TestimonialsSection />
      <ConsultantSection />
      <FAQSection />
      <LeadCaptureSection />
      <CTASection />
    </>
  );
}
