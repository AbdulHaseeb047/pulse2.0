import { Globe, Mail, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 py-24 px-6 md:px-10 border-t-[8px] border-emerald-400/30 w-full font-body text-xs uppercase tracking-[0.25em]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="text-white font-headline font-black text-3xl italic mb-10">Emerald Pulse</div>
          <p className="text-white/40 normal-case leading-relaxed mb-10 font-bold text-sm">
            Karachi's premiere digital destination for premium home services and smart tech. We bring the pulse back to your property.
          </p>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-base mb-10">Services</h6>
          <ul className="space-y-6 font-black">
            {["AC Repair", "Electrician", "Plumbing", "Cleaning"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-base mb-10">Support</h6>
          <ul className="space-y-6 font-black">
            {["Warranty Policy", "Privacy", "FAQs"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="text-emerald-500 font-headline font-bold text-base mb-10">Connect</h6>
          <p className="text-white/40 normal-case mb-6 font-black text-sm">Phase 6, DHA, Karachi, PK</p>
          <div className="flex gap-6">
            <Globe className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-8 h-8" />
            <Mail className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-8 h-8" />
            <Smartphone className="text-white/40 hover:text-emerald-400 cursor-pointer transition-colors w-8 h-8" />
          </div>
        </div>
        
        <div className="col-span-full border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[11px] font-black">© 2024 Emerald Pulse. Made for Karachi 🇵🇰</p>
          <p className="text-white/10 text-[9px] font-black tracking-widest uppercase">All technicians verified through government-issued ID.</p>
        </div>
      </div>
    </footer>
  );
}
