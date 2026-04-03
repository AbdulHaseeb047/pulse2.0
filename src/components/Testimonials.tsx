import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    location: "DHA Phase 6",
    service: "Solar Install",
    text: "The team arrived on time, which is rare in Karachi. The solar installation was clean, and they handled all the wiring perfectly.",
    author: "Arshad Khan",
    role: "Verified Homeowner",
    img: "https://picsum.photos/seed/arshad/100/100"
  },
  {
    location: "Gulshan-e-Iqbal",
    service: "AC Service",
    text: "Free installation actually meant free. No 'service charge' surprises. Emerald Pulse is now my go-to for all home electronics.",
    author: "Sara Ahmed",
    role: "Corporate Manager",
    img: "https://picsum.photos/seed/sara/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-14 px-6 md:px-10 max-w-[1440px] mx-auto">
      <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 tracking-tighter">Voices of Trust</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 md:p-9 rounded-xl flex-1 relative shadow-sm border border-primary/10 transition-all duration-200 card-hover-premium group ${i % 2 === 0 ? "bg-surface-container" : "bg-surface-container-high"}`}
          >
            <Quote className="w-16 h-16 text-primary/10 absolute top-4 right-6 transition-colors duration-200 group-hover:text-white/25 card-logo-motion" />
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-white/50 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-colors duration-200 group-hover:bg-white/15 group-hover:text-white">{t.location}</span>
              <span className="bg-primary/10 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-primary transition-colors duration-200 group-hover:bg-white/20 group-hover:text-white">{t.service}</span>
            </div>
            <p className="text-on-surface text-lg mb-8 font-medium leading-relaxed italic transition-colors duration-200 group-hover:text-white/85">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img 
                className="w-12 h-12 rounded-xl border-4 border-primary/20" 
                src={t.img} 
                alt={t.author}
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-lg transition-colors duration-200 group-hover:text-white">{t.author}</p>
                <p className="text-sm text-on-surface-variant font-bold transition-colors duration-200 group-hover:text-white/75">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
