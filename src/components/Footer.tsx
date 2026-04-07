import { Globe, Mail, Smartphone } from "lucide-react";
import { CONTACT } from "../content/contact";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-emerald-400/30 bg-emerald-950 px-5 py-8 font-body text-[10px] uppercase tracking-[0.12em] md:px-8 md:py-9">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-4 md:gap-7">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-3 text-xl font-black italic tracking-[0.03em] text-white md:text-2xl">Emerald Pulse</div>
          <p className="mb-2 text-[11px] font-bold normal-case leading-relaxed text-white/40 md:text-sm">
            Karachi's premiere digital destination for premium home services and smart tech. We bring the pulse back to your property.
          </p>
        </div>
        
        <div>
          <h6 className="mb-3 font-headline text-[11px] font-bold tracking-[0.14em] text-emerald-500 md:text-sm">Services</h6>
          <ul className="space-y-2 font-black">
            {["AC Repair", "Electrician", "Plumbing", "Cleaning"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="mb-3 font-headline text-[11px] font-bold tracking-[0.14em] text-emerald-500 md:text-sm">Support</h6>
          <ul className="space-y-2 font-black">
            {["Warranty Policy", "Privacy", "FAQs"].map(item => (
              <li key={item}>
                <a className="text-white/40 hover:text-secondary-container transition-colors" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h6 className="mb-3 font-headline text-[11px] font-bold tracking-[0.14em] text-emerald-500 md:text-sm">Connect</h6>
          <p className="mb-3 text-[11px] font-black normal-case text-white/40 md:text-sm">{CONTACT.addressShort}</p>
          <div className="flex gap-3">
            <Globe className="h-5 w-5 cursor-pointer text-white/40 transition-colors hover:text-emerald-400 md:h-6 md:w-6" />
            <Mail className="h-5 w-5 cursor-pointer text-white/40 transition-colors hover:text-emerald-400 md:h-6 md:w-6" />
            <Smartphone className="h-5 w-5 cursor-pointer text-white/40 transition-colors hover:text-emerald-400 md:h-6 md:w-6" />
          </div>
        </div>
        
        <div className="col-span-full border-t border-white/5 pt-5 mt-1 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[9px] font-black text-white/30 md:text-[10px]">© 2024 Emerald Pulse. Made for Karachi 🇵🇰</p>
          <p className="text-white/10 text-[8px] font-black tracking-[0.12em] uppercase">All technicians verified through government-issued ID.</p>
        </div>
      </div>
    </footer>
  );
}
