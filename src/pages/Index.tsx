import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import DifferentialSection from "@/components/DifferentialSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

const Index = () => (
  <main>
    <HeroSection />
    <PainSection />
    <ApproachSection />
    <ServicesSection />
    <BenefitsSection />
    <DifferentialSection />
    <AboutSection />
    <TestimonialsSection />
    <CtaSection />
    <footer className="py-8 bg-card text-center">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Daniela · Medicina Tradicional China · Unquillo
      </p>
    </footer>
  </main>
);

export default Index;
