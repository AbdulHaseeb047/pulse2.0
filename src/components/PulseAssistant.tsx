import { motion } from "motion/react";
import { Bot } from "lucide-react";

export default function PulseAssistant() {
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <div className="relative group">
        <div className="absolute inset-0 diamond-shape bg-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-primary text-on-primary diamond-shape shadow-2xl flex items-center justify-center group relative transition-all border-2 border-primary-container/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <Bot className="w-10 h-10 z-10" />
        </motion.button>
        
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-950 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl border border-primary/20 pointer-events-none">
          Pulse Assistant Online
        </div>
      </div>
    </div>
  );
}
