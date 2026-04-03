import { motion } from "motion/react";
import { Wrench, ShoppingCart, ArrowRight } from "lucide-react";

export default function Stats() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20">
      <div className="space-y-10">
        <div className="flex flex-wrap gap-6 md:gap-8">
          {[
            { label: "Jobs Done", value: "500+" },
            { label: "Top Rating", value: "4.9/5" },
            { label: "Avg Response", value: "2hr", border: "border-r-[6px] border-r-red-600" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-container-lowest p-6 rounded-xl border border-primary/5 flex-1 min-w-[160px] shadow-sm flex flex-col justify-center text-center ${stat.border || ""}`}
            >
              <p className="text-4xl font-headline font-black text-primary mb-1">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#006947] p-8 md:p-10 rounded-xl flex items-center justify-between group cursor-pointer transition-all hover:brightness-110 shadow-xl"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                <Wrench className="text-white w-10 h-10" />
              </div>
              <div>
                <h3 className="text-white font-headline font-extrabold text-2xl tracking-tight mb-1">TECHNICAL SERVICES</h3>
                <p className="text-white/70 font-semibold text-base">Wiring, Plumbing, AC & Repairs</p>
              </div>
            </div>
            <ArrowRight className="text-white w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#ffca4d] p-8 md:p-10 rounded-xl flex items-center justify-between group cursor-pointer transition-all hover:brightness-105 shadow-xl"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center">
                <ShoppingCart className="text-on-secondary-container w-10 h-10" />
              </div>
              <div>
                <h3 className="text-on-secondary-container font-headline font-extrabold text-2xl tracking-tight mb-1">SHOP & INSTALL</h3>
                <p className="text-on-secondary-container/70 font-semibold text-base">Solar, Inverters & Electronics</p>
              </div>
            </div>
            <ArrowRight className="text-on-secondary-container w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
