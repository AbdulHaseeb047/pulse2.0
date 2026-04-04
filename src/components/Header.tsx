import { Link, useLocation } from "react-router-dom";
import { Bot } from "lucide-react";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Shop", to: "/#shop" },
    { label: "About", to: "/#about" },
    { label: "Contact", to: "/#contact" },
  ];

  const isActive = (label: string) => {
    if (label === "Home") {
      return location.pathname === "/";
    }

    if (label === "Services") {
      return location.pathname.startsWith("/services");
    }

    return false;
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-emerald-950/90 font-headline font-bold tracking-tight text-emerald-500 shadow-xl shadow-emerald-900/10 backdrop-blur-2xl">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-10 md:py-3">
      <Link to="/" className="text-xl md:text-2xl font-black text-white italic leading-none">
        Emerald Pulse
      </Link>
      
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`nav-link text-xs uppercase tracking-wider font-bold ${isActive(item.label) ? "active text-white" : "text-white/90 hover:text-white"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex shrink-0 items-center space-x-2.5 md:space-x-4">
        <button className="rounded-lg p-2 text-white/80 transition-all duration-300 hover:bg-white/10">
          <Bot className="h-5 w-5" />
        </button>
        <Link to="/#contact" className="rounded-lg bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-wide text-on-primary shadow-md shadow-primary/20 transition-all hover:brightness-110 active:scale-95 md:px-5 md:py-2.5 md:text-xs">
          Book Now
        </Link>
      </div>
      </div>
    </header>
  );
}
