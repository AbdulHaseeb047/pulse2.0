import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Shop from "../components/Shop";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
        Now serving all areas of Karachi — Free installation on selected electronics
      </div>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <Shop />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <PulseAssistant />
    </div>
  );
}
