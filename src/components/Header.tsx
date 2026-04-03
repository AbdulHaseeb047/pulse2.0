import { motion } from "motion/react";
import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-emerald-950/90 backdrop-blur-2xl text-emerald-500 font-headline font-bold tracking-tight sticky top-0 left-0 right-0 z-50 shadow-2xl shadow-emerald-900/10 w-full">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-5 gap-4">
      <div className="text-2xl md:text-3xl font-black text-white italic">Emerald Pulse</div>
      
      <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
        {["Home", "Services", "Shop", "About", "Contact"].map((item, index) => (
          <a 
            key={item}
            className={`nav-link text-sm uppercase tracking-widest font-bold ${index === 0 ? "active text-white" : "text-white/90 hover:text-white"}`} 
            href="#"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-3 md:space-x-5 shrink-0">
        <button className="p-2.5 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300">
          <Bot className="w-6 h-6" />
        </button>
        <button className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs md:text-sm transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20">
          Book Now
        </button>
      </div>
      </div>
    </header>
  );
}
