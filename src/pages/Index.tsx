import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyEspumarSection from "@/components/WhyEspumarSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PromotionsSection from "@/components/PromotionsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyEspumarSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <PromotionsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
