import { motion } from "motion/react";
import { Search, PlayCircle, Bolt } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-surface-container-high px-5 py-2 rounded-full mb-8">
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
          
          <h1 className="font-headline text-5xl lg:text-8xl font-extrabold text-on-background leading-[0.95] mb-8 tracking-tighter">
            AC, Solar, Wiring & <span className="text-primary italic">Electronics</span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-8 font-medium leading-relaxed">
            Booked, Installed, Guaranteed. Professional premium services tailored for the fast-paced energy of Karachi homes.
          </p>

          <div className="relative max-w-xl mb-12 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="text-primary w-6 h-6" />
            </div>
            <input 
              className="w-full bg-surface-container-lowest border-2 border-primary/10 rounded-xl py-5 pl-14 pr-32 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-lg font-medium placeholder:text-on-surface-variant/40 shadow-sm" 
              placeholder="Search for a service..." 
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-on-primary px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-black text-lg shadow-xl shadow-primary/30 hover:brightness-110 hover:-translate-y-1 transition-all">
              Start Booking
            </button>
            <button className="bg-surface-container-highest text-primary px-10 py-5 rounded-xl font-black text-lg hover:bg-surface-container-high transition-all flex items-center gap-3">
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
            className="absolute -bottom-8 -left-4 lg:-left-4 glass-card p-8 rounded-[2rem] shadow-2xl w-72 transition-transform group-hover:-translate-y-3"
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
