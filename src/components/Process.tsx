import { motion } from "motion/react";

const steps = [
  { id: 1, title: "Quick Booking", desc: "Choose your slot and enter your location in Karachi." },
  { id: 2, title: "Pulse Match", desc: "We assign the best certified specialist near you." },
  { id: 3, title: "Service Visit", desc: "Technician arrives on time for a professional checkup." },
  { id: 4, title: "Cool Comfort", desc: "Pay securely after you are satisfied with the result." },
];

export default function Process() {
  return (
    <section className="bg-[#c9f6e4] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 tracking-tighter text-[#103f32]">The Pulse Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] border-t-2 border-dashed border-[#7fcdb0] -z-0"></div>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-16 h-16 bg-[#8ee3c5] text-[#0a6f49] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-[0_10px_24px_rgba(16,111,73,0.2)]">
                {step.id}
              </div>
              <h4 className="font-headline font-black text-xl mb-2 text-[#184f3f]">{step.title}</h4>
              <p className="text-[#3f6a5b] text-sm font-semibold leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
