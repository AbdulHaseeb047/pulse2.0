import { motion } from "motion/react";
import { Wrench, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Stats() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-10 md:pb-14">
      <div className="space-y-6 md:space-y-7">
        <div className="flex flex-wrap gap-4 md:gap-6">
          {[
            { label: "Jobs Done", value: "500+" },
            { label: "Top Rating", value: "4.9/5" },
            { label: "Avg Response", value: "2hr" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-container-lowest p-5 rounded-xl border border-primary/5 flex-1 min-w-[160px] shadow-sm flex flex-col justify-center text-center group card-hover-premium ${stat.border || ""}`}
            >
              <p className="text-4xl font-headline font-black text-primary mb-1 transition-colors duration-200 group-hover:text-white">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-200 group-hover:text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#006947] p-6 md:p-7 rounded-xl transition-all hover:brightness-110 shadow-xl"
          >
            <Link to="/services" className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                  <Wrench className="text-white w-10 h-10 card-logo-motion" />
                </div>
                <div>
                  <h3 className="text-white font-headline font-extrabold text-2xl tracking-tight mb-1">TECHNICAL SERVICES</h3>
                  <p className="text-white/70 font-semibold text-base">Wiring, Plumbing, AC & Repairs</p>
                </div>
              </div>
              <ArrowRight className="text-white w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#ffca4d] p-6 md:p-7 rounded-xl transition-all hover:brightness-105 shadow-xl"
          >
            <Link to="/shop" className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="text-on-secondary-container w-10 h-10 card-logo-motion" />
                </div>
                <div>
                  <h3 className="text-on-secondary-container font-headline font-extrabold text-2xl tracking-tight mb-1">SHOP & INSTALL</h3>
                  <p className="text-on-secondary-container/70 font-semibold text-base">Solar, Inverters & Electronics</p>
                </div>
              </div>
              <ArrowRight className="text-on-secondary-container w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
