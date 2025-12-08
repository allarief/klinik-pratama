import HealthArticles from "./components/HealthArticles";
import HeroBanner from "./components/HeroBanner";
import WhyChoose from "./components/WhyChoose";
import AdvancedDiagnosticSection from "./components/AdvancedDiagnosticSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* Main soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white -z-20" />

      {/* Soft glow di kiri atas */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300/30 rounded-full blur-[150px] -z-10" />

      {/* Soft glow di kanan bawah */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/40 rounded-full blur-[200px] -z-10" />

      {/* Extra subtle accent center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-100/30 rounded-full blur-[180px] opacity-70 -z-10" />

      <HeroBanner />
      <AdvancedDiagnosticSection />
      <WhyChoose />
      <HealthArticles />
      <Testimonial />
    </div>
  );
}

