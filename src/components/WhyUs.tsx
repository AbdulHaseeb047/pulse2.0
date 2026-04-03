import { motion } from "motion/react";
import { ShieldCheck, BadgeDollarSign, History } from "lucide-react";

const reasons = [
  { 
    icon: ShieldCheck, 
    title: "Background Checked Staff", 
    desc: "Every pulse technician goes through a rigorous character and skill verification process." 
  },
  { 
    icon: BadgeDollarSign, 
    title: "Transparent Pricing", 
    desc: "No hidden charges. You see the price upfront before the technician even leaves our hub." 
  },
  { 
    icon: History, 
    title: "Warranty on Service", 
    desc: "Enjoy peace of mind with our 15-day post-service warranty on all work done." 
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]"
        >
          <img 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/karachi-service/800/1200" 
            alt="Karachi Service"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </motion.div>
        
        <div>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold mb-10 tracking-tighter leading-[0.9]">
            Why Karachi Trusts <br/><span className="text-primary italic">Emerald Pulse</span>
          </h2>
          <div className="space-y-10">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-8"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <reason.icon className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-bold text-2xl mb-2">{reason.title}</h5>
                  <p className="text-on-surface-variant text-lg font-medium leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
