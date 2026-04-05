import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Shop", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/connect" },
  ];

  const isActive = (label: string) => {
    if (label === "Home") {
      return location.pathname === "/";
    }

    if (label === "Services") {
      return location.pathname.startsWith("/services");
    }

    if (label === "Shop") {
      return location.pathname.startsWith("/shop");
    }

    if (label === "About") {
      return location.pathname.startsWith("/about");
    }

    if (label === "Contact") {
      return location.pathname.startsWith("/connect");
    }

    return false;
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-emerald-950/90 font-headline font-bold tracking-tight text-emerald-500 shadow-xl shadow-emerald-900/10 backdrop-blur-2xl">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-10 md:py-3">
        <Link to="/" className="text-xl font-black italic leading-none tracking-[0.03em] text-white md:text-2xl">
          Emerald Pulse
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`nav-link text-[11px] font-bold uppercase tracking-[0.18em] ${isActive(item.label) ? "active text-white" : "text-white/90 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center space-x-2.5 md:space-x-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-white/90 transition-all duration-300 hover:bg-white/10 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button className="rounded-lg p-2 text-white/80 transition-all duration-300 hover:bg-white/10">
            <Bot className="h-5 w-5" />
          </button>
          <Link to="/connect" className="hidden rounded-lg bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-on-primary shadow-md shadow-primary/20 transition-all hover:brightness-110 active:scale-95 md:inline-flex md:px-5 md:py-2.5 md:text-xs">
            Book Now
          </Link>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-emerald-950/95 px-4 pb-4 pt-3 lg:hidden sm:px-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-lg px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition ${isActive(item.label) ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/connect"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-on-primary"
            >
              Book Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
