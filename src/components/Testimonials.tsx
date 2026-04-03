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
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <h2 className="font-headline text-5xl font-extrabold text-center mb-24 tracking-tighter">Voices of Trust</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-12 rounded-xl flex-1 relative shadow-sm hover:shadow-xl transition-shadow ${i % 2 === 0 ? "bg-surface-container" : "bg-surface-container-high"}`}
          >
            <Quote className="w-24 h-24 text-primary/10 absolute top-6 right-10" />
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-white/50 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest">{t.location}</span>
              <span className="bg-primary/10 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-primary">{t.service}</span>
            </div>
            <p className="text-on-surface text-xl mb-12 font-medium leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-5">
              <img 
                className="w-16 h-16 rounded-xl border-4 border-primary/20" 
                src={t.img} 
                alt={t.author}
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-lg">{t.author}</p>
                <p className="text-sm text-on-surface-variant font-bold">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
