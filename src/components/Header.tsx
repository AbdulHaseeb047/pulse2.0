import { Link, useLocation } from "react-router-dom";
import { Bot, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 z-[60] w-full bg-emerald-950 md:bg-emerald-950/90 font-headline font-bold tracking-tight text-emerald-500 shadow-xl shadow-emerald-900/10 md:backdrop-blur-2xl">
      <div className="flex min-h-[60px] w-full items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-10 md:py-3">
        <Link to="/" className="text-lg font-black italic leading-none tracking-[0.03em] text-white sm:text-xl md:text-2xl">
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
            className="group relative h-10 w-10 rounded-xl border border-white/15 bg-white/8 text-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white/15 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 rounded bg-white transition-all duration-300 ease-out ${isMenuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px] rotate-0"}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded bg-white transition-all duration-300 ease-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 rounded bg-white transition-all duration-300 ease-out ${isMenuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px] rotate-0"}`}
            />
          </button>
          <button className="hidden rounded-lg p-2 text-white/80 transition-all duration-300 hover:bg-white/10 lg:inline-flex">
            <Bot className="h-5 w-5" />
          </button>
          <Link to="/book" className="hidden rounded-lg bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-on-primary shadow-md shadow-primary/20 transition-all hover:brightness-110 active:scale-95 lg:inline-flex lg:px-5 lg:py-2.5 lg:text-xs">
            Book Now
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex h-[100vh] w-[100vw] flex-col overflow-hidden bg-[linear-gradient(160deg,rgba(2,47,35,0.98),rgba(4,80,60,0.96))] px-4 pb-5 pt-2 lg:hidden sm:px-6"
            initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="mb-4 flex min-h-[60px] items-center justify-between border-b border-white/10">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-black italic leading-none tracking-[0.03em] text-white sm:text-xl"
              >
                Emerald Pulse
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/90"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="grid gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2, delay: index * 0.04, ease: "easeOut" }}
                  >
                    <Link
                      to={item.to}
                      className={`flex w-full box-border items-center justify-between rounded-xl px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition ring-1 ring-inset ${isActive(item.label) ? "bg-[#8bf2c9]/18 text-white ring-[#8bf2c9]/45" : "bg-white/5 text-white/90 ring-white/12 hover:bg-white/10 hover:text-white hover:ring-white/20"}`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-white/70">→</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.22, delay: 0.18, ease: "easeOut" }}
                >
                  <Link
                    to="/book"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-on-primary shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
