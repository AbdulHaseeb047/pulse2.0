import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleX,
  Factory,
  Snowflake,
  Sun,
  Wrench,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "AC Maintenance",
    desc: "Complete deep cleaning, gas refill, and efficiency optimization for peak cooling.",
    image: "https://picsum.photos/seed/emerald-ac/700/500",
    badge: "Expert Choice",
    icon: Snowflake,
    tags: ["Cleaning", "Refill"],
    category: "AC Maintenance",
  },
  {
    title: "Electrician",
    desc: "Emergency fault detection, DB dressing, and general electrical repair.",
    image: "https://picsum.photos/seed/emerald-electrician/700/500",
    badge: "Reliable",
    icon: Wrench,
    tags: ["Emergency", "Certified"],
    category: "Electrical",
  },
  {
    title: "Solar Installation",
    desc: "Tier-1 solar solutions with net metering and high-efficiency inverter support.",
    image: "https://picsum.photos/seed/emerald-solar/700/500",
    badge: "Trending",
    icon: Sun,
    tags: ["Energy", "Sustainable"],
    category: "Solar",
  },
  {
    title: "Chiller Services",
    desc: "Commercial-grade cooling support for buildings, malls, and industrial sites.",
    image: "https://picsum.photos/seed/emerald-chiller/700/500",
    badge: "Commercial",
    icon: Factory,
    tags: ["Commercial", "HVAC"],
    category: "Contracts",
  },
  {
    title: "Consultancy",
    desc: "On-site technical planning, equipment audits, and maintenance strategy for properties.",
    image: "https://picsum.photos/seed/emerald-consultancy/700/500",
    badge: "Advisory",
    icon: CheckCircle2,
    tags: ["Audit", "Planning"],
    category: "Consultancy",
  },
];

const filterOptions = ["All Services", "Solar", "AC Maintenance", "Electrical", "Contracts", "Consultancy"];

const comparisonItems = [
  {
    title: "Unverified Technicians",
    desc: "Often unfamiliar apprentices or uncertified labor.",
    bad: true,
  },
  {
    title: "Substandard Material",
    desc: "Local market grade wires and parts that fail early.",
    bad: true,
  },
  {
    title: "No Time Guarantees",
    desc: "Highly variable response times and \"no-shows\".",
    bad: true,
  },
  {
    title: "No Service Warranty",
    desc: "No formal accountability once the job is finished.",
    bad: true,
  },
  {
    title: "Hidden Pricing",
    desc: "Subject to aggressive negotiation and hidden fees.",
    bad: true,
  },
];

const emeraldItems = [
  {
    title: "NVO Level 3 Certified",
    desc: "Expert technicians verified through government-issued ID.",
  },
  {
    title: "Premium Materials",
    desc: "Only imported & branded materials used for all repairs.",
  },
  {
    title: "4-Hour Dispatch",
    desc: "Guaranteed technician arrival within 4 hours of booking.",
  },
  {
    title: "30-Day Full Warranty",
    desc: "Comprehensive service guarantee for your peace of mind.",
  },
  {
    title: "Upfront Fixed Rates",
    desc: "Transparent pricing displayed on app before you book.",
  },
];

const corporateCards = [
  {
    title: "Corporate Office AMC",
    desc: "Comprehensive HVAC and electrical support for high-rise offices and multi-floor workplaces.",
    image: "https://picsum.photos/seed/emerald-office/900/620",
  },
  {
    title: "Facility Management",
    desc: "Dedicated on-site technical teams for malls, hospitals, and luxury residences.",
    image: "https://picsum.photos/seed/emerald-facility/900/620",
  },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All Services");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const filterContainerRef = useRef<HTMLDivElement | null>(null);
  const filterButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filteredServices = useMemo(() => {
    if (activeFilter === "All Services") {
      return services;
    }

    return services.filter((service) => service.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = filterButtonRefs.current[activeFilter];
      const container = filterContainerRef.current;

      if (!activeButton || !container) {
        return;
      }

      setIndicatorStyle({
        left: activeButton.offsetLeft,
        top: activeButton.offsetTop,
        width: activeButton.offsetWidth,
        height: activeButton.offsetHeight,
        opacity: 1,
      });
    };

    const frame = window.requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#d5fae8] text-[#083f31]">
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
        Now serving all areas of Karachi — Free installation on selected electronics
      </div>
      <Header />

      <main className="flex-grow">
        <section className="px-4 pt-4 pb-12 md:px-10 md:pt-7 md:pb-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-2 inline-flex items-center rounded-full bg-[#b8f0d7] px-5 py-2 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-primary shadow-sm">
              Karachi's premium choice
            </div>

            <div className="mt-3 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-4xl">
                <h1 className="font-headline text-6xl md:text-[6.25rem] font-black tracking-tighter text-[#052f25] leading-[0.9]">
                  Our Services
                </h1>
                <p className="mt-5 max-w-2xl text-base md:text-lg text-[#40695d]">
                  Expert maintenance and technical solutions tailored for Karachi's urban pace. Reliability that beats the heat.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                  <div className="rounded-2xl bg-gradient-to-br from-[#d6f9ea] to-[#b9ecd8] px-5 py-4 border border-[#8ad3b6] shadow-[0_10px_24px_rgba(10,111,73,0.16)]">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0b6f4b]">Response</p>
                    <p className="mt-1.5 text-base font-extrabold text-[#103f32]">Fast Local Dispatch</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#d6f9ea] to-[#b9ecd8] px-5 py-4 border border-[#8ad3b6] shadow-[0_10px_24px_rgba(10,111,73,0.16)]">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0b6f4b]">Coverage</p>
                    <p className="mt-1.5 text-base font-extrabold text-[#103f32]">Karachi-Wide Teams</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#d6f9ea] to-[#b9ecd8] px-5 py-4 border border-[#8ad3b6] shadow-[0_10px_24px_rgba(10,111,73,0.16)]">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0b6f4b]">Trust</p>
                    <p className="mt-1.5 text-base font-extrabold text-[#103f32]">Verified Technicians</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative self-start overflow-hidden rounded-[2rem] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              >
                <img
                  src="https://picsum.photos/seed/emerald-hero-services/900/650"
                  alt="Emerald Pulse service team"
                  className="h-[260px] w-full object-cover md:h-[320px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06241b]/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 p-4 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0f7a55]">Fast dispatch</p>
                  <p className="mt-1 text-sm font-semibold text-[#20453c]">Premium crews, faster response, cleaner work.</p>
                </div>
              </motion.div>
            </div>

            <div ref={filterContainerRef} className="relative mt-8 flex flex-wrap gap-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute rounded-full bg-[#f6bc34] shadow-[0_12px_24px_rgba(246,188,52,0.35)] transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  top: indicatorStyle.top,
                  width: indicatorStyle.width,
                  height: indicatorStyle.height,
                  opacity: indicatorStyle.opacity,
                }}
              />
              {filterOptions.map((chip) => {
                const isActive = chip === activeFilter;

                return (
                  <button
                    key={chip}
                    type="button"
                    ref={(element) => {
                      filterButtonRefs.current[chip] = element;
                    }}
                    onClick={() => setActiveFilter(chip)}
                    className={`relative z-10 cursor-pointer rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-transparent text-[#083f31]"
                        : "bg-[#b7f1d8] text-[#35685a] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:bg-[#a6ecd0] hover:cursor-pointer"
                    } ${isActive ? "shadow-none" : "shadow-sm"}`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-[#f6e78b] px-4 py-3 text-xs md:text-sm font-medium text-[#5b5d38] shadow-sm">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#083f31] text-[10px] text-[#f6e78b]">★</span>
              MOST BOOKED THIS MONTH: AC Maintenance · Solar Installation · House Wiring
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {filteredServices.map((service) => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_18px_36px_rgba(0,0,0,0.14)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-[#c43c3c] px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                      {service.badge}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-headline text-lg font-bold text-[#073d30]">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#4d6c62]">{service.desc}</p>
                      </div>
                      <service.icon className="h-5 w-5 shrink-0 text-[#0a6f49] transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#e9f8ef] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#518575]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f8bf3d] px-5 py-2.5 text-sm font-black text-[#103f32] transition-all duration-200 hover:scale-[1.04] hover:bg-[#ffcf5f] hover:shadow-lg">
                      View Service <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              ))}

              {filteredServices.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[#9bcfbc] bg-white/70 p-6 text-center text-[#4b6d63] md:col-span-2 xl:col-span-4">
                  No services match the selected filter right now.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#e4f7ee] px-4 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-black tracking-tight text-[#073d30] md:text-5xl">
                Why book through Emerald Pulse?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5f7b72] md:text-base">
                The difference is in the details. We set the standard for Karachi.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-[#bff0da] p-6 md:p-8">
                <h3 className="text-2xl font-black text-[#073d30]">Local Vendors</h3>
                <p className="mt-2 text-sm text-[#59746a]">Standard market practices</p>

                <div className="mt-8 space-y-5">
                  {comparisonItems.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d84b4b] text-white">
                        <CircleX className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1f433a]">{item.title}</h4>
                        <p className="text-sm text-[#5e7a71]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl border border-[#d2e7dd] bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:p-8">
                <span className="absolute -top-3 right-6 rounded-full bg-[#0b8d5c] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-md">
                  Recommended
                </span>
                <h3 className="text-2xl font-black text-[#073d30]">Emerald Pulse</h3>
                <p className="mt-2 text-sm text-[#5f7b72]">The premium gold standard</p>

                <div className="mt-8 space-y-5">
                  {emeraldItems.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b8d5c] text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1f433a]">{item.title}</h4>
                        <p className="text-sm text-[#5e7a71]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full rounded-2xl bg-[#0a8f5f] px-5 py-4 text-sm font-black text-white shadow-lg transition-transform duration-200 hover:scale-[1.01]">
                  Book Premium Service
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#dff7ed] px-4 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto flex max-w-[1180px] flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-[62%]">
                <h2 className="font-headline text-3xl font-black tracking-tight text-[#073d30] md:text-5xl">
                  Running an office, mall, or building?
                </h2>
                <p className="mt-3 text-sm text-[#5f7b72] md:text-base">
                  Scale your maintenance with automated schedules and priority technician dispatch. Corporate reliability for the city's landmarks.
                </p>
              </div>
              <aside className="w-full rounded-3xl border border-[#b4dccb] bg-white/95 p-5 shadow-[0_16px_30px_rgba(7,61,48,0.12)] md:w-[460px] md:shrink-0">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0a8f5f]">Contract Support Desk</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-2 rounded-full bg-[#edf8f2] px-3 py-2 text-xs font-bold text-[#295247]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0a8f5f]" />
                    Dedicated account coordinator for every site
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[#edf8f2] px-3 py-2 text-xs font-bold text-[#295247]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0a8f5f]" />
                    Preventive checklists with monthly reports
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[#edf8f2] px-3 py-2 text-xs font-bold text-[#295247]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0a8f5f]" />
                    Priority escalation channel for urgent faults
                  </li>
                </ul>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a8f5f] px-5 py-3 text-sm font-black text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
                  Inquire for Contracts
                </button>
              </aside>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {corporateCards.map((card) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.18 }}
                  className="relative overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                >
                  <img src={card.image} alt={card.title} className="h-[250px] w-full object-cover md:h-[300px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-black">{card.title}</h3>
                    <p className="mt-1 max-w-lg text-sm text-white/85">{card.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#f8bf3d]">
                      Explore Contract <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf8f2] px-4 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-black tracking-tight text-[#073d30] md:text-5xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5f7b72] md:text-base">
              Our senior consultants can visit your site to perform a comprehensive 360° technical audit of your property.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-[#f8bf3d] px-6 py-3 text-sm font-black text-[#073d30] shadow-lg transition-transform duration-200 hover:scale-[1.02]">
                Book Free Site Visit
              </button>
              <button className="rounded-full border border-[#a8cfc0] bg-white px-6 py-3 text-sm font-black text-[#073d30] transition-transform duration-200 hover:scale-[1.02]">
                Speak with Expert
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
