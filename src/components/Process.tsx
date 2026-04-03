import { motion } from "motion/react";

const steps = [
  { id: 1, title: "Pick a Service", desc: "Browse our professional catalog and select exactly what you need fixed." },
  { id: 2, title: "Book Your Slot", desc: "Choose a date and time that fits your Karachi schedule—same day available." },
  { id: 3, title: "Relax & Renew", desc: "Our verified technician arrives and finishes the job with professional precision." },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <h2 className="font-headline text-5xl font-extrabold text-center mb-24 tracking-tighter">Simple 3-Step Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] border-t-4 border-dashed border-primary/20 -z-0"></div>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-32 h-32 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-10 text-4xl font-black shadow-2xl shadow-primary/30 outline outline-8 outline-background">
                {step.id}
              </div>
              <h4 className="font-headline font-bold text-2xl mb-5">{step.title}</h4>
              <p className="text-on-surface-variant text-lg font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
