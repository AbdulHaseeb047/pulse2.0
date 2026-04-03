import { Globe, Mail, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 py-9 md:py-10 px-5 md:px-8 border-t-4 border-emerald-400/30 w-full font-body text-[11px] uppercase tracking-[0.14em]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
        <div className="col-span-1 md:col-span-1">
          <div className="text-white font-headline font-black text-2xl italic mb-3">Emerald Pulse</div>
          <p className="text-white/40 normal-case leading-relaxed mb-2 font-bold text-xs md:text-sm">
            Karachi's premiere digital destination for premium home services and smart tech. We bring the pulse back to your property.
          </p>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-sm mb-3">Services</h6>
          <ul className="space-y-2 font-black">
            {["AC Repair", "Electrician", "Plumbing", "Cleaning"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-sm mb-3">Support</h6>
          <ul className="space-y-2 font-black">
            {["Warranty Policy", "Privacy", "FAQs"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-sm mb-3">Connect</h6>
          <p className="text-white/40 normal-case mb-3 font-black text-xs md:text-sm">Phase 6, DHA, Karachi, PK</p>
          <div className="flex gap-3">
            <Globe className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-6 h-6" />
            <Mail className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-6 h-6" />
            <Smartphone className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-6 h-6" />
          </div>
        </div>
        
        <div className="col-span-full border-t border-white/5 pt-5 mt-1 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-[10px] font-black">© 2024 Emerald Pulse. Made for Karachi 🇵🇰</p>
          <p className="text-white/10 text-[8px] font-black tracking-[0.12em] uppercase">All technicians verified through government-issued ID.</p>
        </div>
      </div>
    </footer>
  );
}
