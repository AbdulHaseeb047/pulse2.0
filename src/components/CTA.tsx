import { motion } from "motion/react";
import { Calendar, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "../content/contact";

export default function CTA() {
  return (
    <section id="contact" className="relative py-10 md:py-14 mx-4 md:mx-10 mb-10 md:mb-12 rounded-xl overflow-hidden">
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
          <Link to="/book" className="flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-on-primary shadow-xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95 md:px-8 md:py-4 md:text-sm">
            <Calendar className="w-5 h-5" /> Book Now
          </Link>
          <button className="flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-green-500/20 transition-transform hover:scale-105 active:scale-95 md:px-8 md:py-4 md:text-sm">
            <MessageSquare className="w-5 h-5" /> WhatsApp
          </button>
          <button className="flex items-center gap-2.5 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-white backdrop-blur-xl transition-transform hover:scale-105 active:scale-95 md:px-8 md:py-4 md:text-sm">
            <Phone className="w-5 h-5" /> {CONTACT.directLine}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
