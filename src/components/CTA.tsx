import { motion } from "motion/react";
import { Calendar, MessageSquare, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 mx-6 md:mx-10 mb-32 rounded-xl overflow-hidden">
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
        className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-10"
      >
        <h2 className="font-headline text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-tight">
          Ready to fix your space?
        </h2>
        <p className="text-emerald-100/70 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-medium">
          Get an instant quote or book a professional technician in under 60 seconds.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary text-on-primary px-12 py-6 rounded-xl font-black text-xl flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40 uppercase tracking-widest">
            <Calendar className="w-6 h-6" /> Book Now
          </button>
          <button className="bg-[#25D366] text-white px-12 py-6 rounded-xl font-black text-xl flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-green-500/30 uppercase tracking-widest">
            <MessageSquare className="w-6 h-6" /> WhatsApp
          </button>
          <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-6 rounded-xl font-black text-xl flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 uppercase tracking-widest">
            <Phone className="w-6 h-6" /> 0800-PULSE
          </button>
        </div>
      </motion.div>
    </section>
  );
}
