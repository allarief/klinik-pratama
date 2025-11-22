import HealthArticles from "./components/HealthArticles";
import HeroBanner from "./components/HeroBanner";
import WhyChoose from "./components/WhyChoose";
import AdvancedDiagnosticSection from "./components/AdvancedDiagnosticSection";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
   <>
   <HeroBanner></HeroBanner>
   <AdvancedDiagnosticSection></AdvancedDiagnosticSection>
   <WhyChoose></WhyChoose>
   <HealthArticles></HealthArticles>
   <Testimonial></Testimonial>
   </>
  );
}
