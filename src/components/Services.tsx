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
    <section id="services" className="py-10 md:py-14 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">Professional Ecosystem</h2>
        <p className="text-on-surface-variant font-semibold text-base md:text-lg">Specialized solutions for every corner of your property.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-7 rounded-xl border border-primary/10 transition-all group cursor-pointer card-hover-premium"
          >
            <service.icon className="w-10 h-10 text-primary mb-5 transition-colors duration-200 group-hover:text-white card-logo-motion" />
            <h3 className="font-headline font-bold text-xl mb-2 transition-colors duration-200 group-hover:text-white">{service.title}</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed transition-colors duration-200 group-hover:text-white/80">{service.desc}</p>
            <span className="inline-block bg-secondary-container text-on-secondary-container text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-200 group-hover:bg-white/15 group-hover:text-white group-hover:border group-hover:border-white/30">
              With or Without Materials
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
