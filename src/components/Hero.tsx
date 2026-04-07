import { motion } from "motion/react";
import { Search, PlayCircle, Bolt } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-3 pb-10 md:px-10 md:pt-6 md:pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center mb-6 md:mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-surface-container-high px-5 py-2 rounded-full mb-6">
            <span className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  alt="user" 
                  className="w-10 h-10 rounded-full border-2 border-surface" 
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  referrerPolicy="no-referrer"
                />
              ))}
            </span>
            <span className="text-on-surface-variant font-label text-xs font-black uppercase tracking-[0.1em]">500+ Karachi Customers</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold text-on-background leading-[0.95] mb-5 tracking-tighter">
            AC, Solar, Wiring & <span className="text-primary italic">Electronics</span>
          </h1>
          
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mb-6 font-medium leading-relaxed">
            Booked, Installed, Guaranteed. Professional premium services tailored for the fast-paced energy of Karachi homes.
          </p>

          <div className="relative max-w-xl mb-8 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="text-primary w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
            </div>
            <input 
              className="w-full bg-surface-container-lowest border-2 border-primary/10 rounded-xl py-5 pl-14 pr-32 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 text-lg font-medium placeholder:text-on-surface-variant/40 shadow-sm group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10" 
              placeholder="Search for a service..." 
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-on-primary transition-all duration-300 hover:-translate-y-[55%] hover:brightness-110 hover:shadow-lg hover:shadow-primary/30">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/book" className="rounded-xl bg-primary px-7 py-3.5 text-sm font-black tracking-[0.04em] text-on-primary shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:brightness-110 md:text-base">
              Start Booking
            </Link>
            <button className="flex items-center gap-3 rounded-xl bg-surface-container-highest px-7 py-3.5 text-sm font-black tracking-[0.04em] text-primary transition-all hover:bg-surface-container-high md:text-base">
              <PlayCircle className="w-6 h-6" /> View Work
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group lg:pl-12"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-125"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/karachi-home/800/800" 
              alt="Premium Service"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-8 left-2 sm:-left-4 lg:-left-4 glass-card p-6 sm:p-8 rounded-[2rem] shadow-2xl w-[calc(100%-1rem)] max-w-72 transition-transform group-hover:-translate-y-3"
          >
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                <Bolt className="text-on-secondary-container w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Power-Up Status</p>
                <p className="text-base font-bold text-on-surface">Verified Expert Online</p>
              </div>
            </div>
            <div className="h-2.5 bg-surface-container rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
