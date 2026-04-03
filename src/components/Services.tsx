import { motion } from "motion/react";
import { 
  Snowflake, 
  Sun, 
  Zap, 
  Refrigerator, 
  Droplets, 
  Shield, 
  Brush, 
  Hammer 
} from "lucide-react";

const services = [
  { icon: Snowflake, title: "AC Maintenance", desc: "Full chemical cleaning and gas refill for peak summer cooling." },
  { icon: Sun, title: "Solar Solutions", desc: "End-to-end solar panel installation and inverter syncing." },
  { icon: Zap, title: "Complete Wiring", desc: "Internal house wiring and switchboard repairs by experts." },
  { icon: Refrigerator, title: "Electronics Repair", desc: "Washing machines, fridges, and microwave diagnostics." },
  { icon: Droplets, title: "Plumbing Works", desc: "Fixing leaks, pressure pumps, and bathroom fittings." },
  { icon: Shield, title: "CCTV Setup", desc: "Smart security surveillance installation with mobile access." },
  { icon: Brush, title: "Deep Cleaning", desc: "Post-renovation or seasonal full house sanitization." },
  { icon: Hammer, title: "General Fixes", desc: "All small fixes, furniture assembly, and odd jobs." },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-headline text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter">Professional Ecosystem</h2>
        <p className="text-on-surface-variant font-semibold text-xl">Specialized solutions for every corner of your property.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-10 rounded-xl border border-transparent glow-hover transition-all group cursor-pointer"
          >
            <service.icon className="w-12 h-12 text-primary mb-8" />
            <h3 className="font-headline font-bold text-2xl mb-3">{service.title}</h3>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">{service.desc}</p>
            <span className="inline-block bg-secondary-container text-on-secondary-container text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
              With or Without Materials
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
