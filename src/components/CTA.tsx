import { motion } from "motion/react";
import { Calendar, MessageSquare, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-10 md:py-14 mx-4 md:mx-10 mb-10 md:mb-12 rounded-xl overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://picsum.photos/seed/karachi-night/1920/1080" 
        alt="Karachi Night"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8"
      >
        <h2 className="font-headline text-3xl md:text-5xl font-black text-white mb-4 md:mb-5 tracking-tighter leading-tight">
          Ready to fix your space?
        </h2>
        <p className="text-emerald-100/70 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
          Get an instant quote or book a professional technician in under 60 seconds.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <button className="bg-primary text-on-primary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 uppercase tracking-[0.14em]">
            <Calendar className="w-5 h-5" /> Book Now
          </button>
          <button className="bg-[#25D366] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20 uppercase tracking-[0.14em]">
            <MessageSquare className="w-5 h-5" /> WhatsApp
          </button>
          <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 uppercase tracking-[0.14em]">
            <Phone className="w-5 h-5" /> 0800-PULSE
          </button>
        </div>
      </motion.div>
    </section>
  );
}
