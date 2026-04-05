import { motion } from "motion/react";
import { Bot } from "lucide-react";

export default function PulseAssistant() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] md:bottom-8 md:right-8">
      <div className="relative group">
        <div className="absolute inset-0 diamond-shape bg-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-18 md:h-18 bg-primary text-on-primary diamond-shape shadow-2xl flex items-center justify-center group relative transition-all border border-primary-container/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <Bot className="w-8 h-8 md:w-9 md:h-9 z-10" />
        </motion.button>
        
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-950 text-white px-3 py-2 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] whitespace-nowrap shadow-xl border border-primary/20 pointer-events-none">
          Pulse Assistant Online
        </div>
      </div>
    </div>
  );
}
