import { motion } from "motion/react";
import { BadgeCheck, BatteryCharging, Cable, ChevronRight, Fan, Heart, Lightbulb, ShoppingCart, ShieldCheck, Sparkles, Sun, ToggleLeft, Truck, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";

const categories = [
  { label: "Bulbs", icon: Lightbulb },
  { label: "Wires", icon: Cable },
  { label: "Chargers", icon: BatteryCharging },
  { label: "Solar", icon: Sun },
  { label: "Switches", icon: ToggleLeft },
  { label: "Fans", icon: Fan },
];

const spotlightProducts = [
  {
    name: "Industrial High-Output LED",
    category: "Bulbs",
    price: "PKR 1,450",
    description: "Bright, efficient lighting with verified quality and installation support.",
    image: "https://picsum.photos/seed/ep-shop-bulb/600/420",
    badge: "Free Install",
  },
  {
    name: "SmartAmbient Series",
    category: "Lighting",
    price: "PKR 2,800",
    description: "Warm ambient lighting for homes, showrooms, and office spaces.",
    image: "https://picsum.photos/seed/ep-shop-lamp/600/420",
    badge: "Open Box",
  },
  {
    name: "Edison Spiral Filament",
    category: "Vintage",
    price: "PKR 950",
    description: "Decorative filament bulb with a premium finish and tested longevity.",
    image: "https://picsum.photos/seed/ep-shop-filament/600/420",
    badge: "Genuine Part",
  },
  {
    name: "Security Flood Pro",
    category: "Security",
    price: "PKR 4,200",
    description: "Outdoor flood light with wide spread coverage and safety-tested body.",
    image: "https://picsum.photos/seed/ep-shop-flood/600/420",
    badge: "Verified",
  },
];

const componentProducts = [
  {
    name: "Masterpack MT2",
    category: "Wall Plate",
    price: "PKR 12,500",
    description: "Heavy-duty distribution board with compliance-grade build quality.",
    image: "https://picsum.photos/seed/ep-shop-panelboard/480/360",
  },
  {
    name: "Deco Glass Wall Socket",
    category: "Hardware",
    price: "PKR 2,400",
    description: "Clean wall socket design with scratch-resistant glass finish.",
    image: "https://picsum.photos/seed/ep-shop-socket/480/360",
  },
  {
    name: "Fast-X Copper Wire",
    category: "Wires",
    price: "PKR 8,900",
    description: "Reliable copper wiring for residential and commercial projects.",
    image: "https://picsum.photos/seed/ep-shop-wire/480/360",
  },
  {
    name: "Tier-1 Solar Module",
    category: "Solar",
    price: "PKR 45,000",
    description: "High-efficiency solar panel with strong output and long service life.",
    image: "https://picsum.photos/seed/ep-shop-solarmodule/480/360",
  },
  {
    name: "Turbo Industrial Fan",
    category: "Fans",
    price: "PKR 6,800",
    description: "Quiet, powerful air movement for large spaces and commercial use.",
    image: "https://picsum.photos/seed/ep-shop-fan/480/360",
  },
  {
    name: "SafeGuard DB Enclosure",
    category: "Safety",
    price: "PKR 3,500",
    description: "Durable enclosure built for neat and safe electrical routing.",
    image: "https://picsum.photos/seed/ep-shop-enclosure/480/360",
  },
  {
    name: "Pro-Link Reel Cord",
    category: "Utility",
    price: "PKR 5,200",
    description: "Extended cord reel with reinforced housing for daily use.",
    image: "https://picsum.photos/seed/ep-shop-cord/480/360",
  },
  {
    name: "Digi-Check Multimeter",
    category: "Tools",
    price: "PKR 7,500",
    description: "Accurate diagnostics tool for engineers and technicians.",
    image: "https://picsum.photos/seed/ep-shop-meter/480/360",
  },
];

const promiseItems = [
  {
    icon: Truck,
    title: "Same Day Dispatch",
    desc: "Order before 2 PM for rapid Karachi delivery and setup scheduling.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Products",
    desc: "Every unit is checked, sealed, and registered before it leaves us.",
  },
  {
    icon: Sparkles,
    title: "Installation Included",
    desc: "Professional installation by our team for eligible products and bundles.",
  },
  {
    icon: Zap,
    title: "Support Included",
    desc: "Fast help, warranty tracking, and installation follow-up from the same team.",
  },
];

const heroImages = [
  {
    src: "https://picsum.photos/seed/ep-shop-lights/420/360",
    alt: "Warm hanging lights",
  },
  {
    src: "https://picsum.photos/seed/ep-shop-coils/420/360",
    alt: "Copper coil stack",
  },
  {
    src: "https://picsum.photos/seed/ep-shop-panel/420/360",
    alt: "Electrical control panel",
  },
  {
    src: "https://picsum.photos/seed/ep-shop-tools/420/360",
    alt: "Measurement tools",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#d5fae8] text-[#083f31]">
      <div className="bg-primary px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-on-primary md:text-xs">
        Open-box verified electronics with installation support across Karachi
      </div>

      <Header />

      <main className="flex-grow">
        <section className="px-4 pt-4 md:px-10 md:pt-6">
          <div className="mx-auto max-w-[1440px] rounded-[1.5rem] border border-[#0d6c49] bg-[#086d4c] p-4 text-white shadow-[0_18px_38px_rgba(0,0,0,0.14)] md:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.14fr_0.80fr] lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(2,39,27,0.96),rgba(4,109,76,0.94))] px-5 py-6 md:px-8 md:py-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(163,245,202,0.18),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(255,202,77,0.12),transparent_22%)]" />
                <div className="relative z-10 flex h-full min-h-[348px] max-w-2xl flex-col justify-between md:min-h-[384px]">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffca4d] md:text-[11px]">Karachi&apos;s electronics destination</p>
                    <h1 className="mt-4 max-w-xl font-headline text-[3.05rem] font-black italic leading-[0.9] tracking-[-0.04em] text-[#f6fff8] sm:text-[3.55rem] md:text-[4.6rem] lg:text-[5.1rem]">
                    Genuine Parts.
                    <span className="block text-[#ffca4d]">Expert Advice.</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-white/78 md:text-[0.96rem]">
                    A shop experience built to match the Emerald Pulse brand: premium emerald styling, tighter typography, verified parts, and installation-ready support.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#dcfff0] backdrop-blur-sm md:text-[10px]">
                      <BadgeCheck className="h-4 w-4 text-[#ffca4d]" /> 100% Genuine
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#dcfff0] backdrop-blur-sm md:text-[10px]">
                      <ShoppingCart className="h-4 w-4 text-[#ffca4d]" /> Express Shipping
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#dcfff0] backdrop-blur-sm md:text-[10px]">
                      <ShieldCheck className="h-4 w-4 text-[#ffca4d]" /> Expert Support
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid grid-cols-2 gap-2.5"
              >
                <div className="grid gap-2.5">
                  <div className="h-[169px] overflow-hidden rounded-[1.25rem] bg-[#0b6e4b] shadow-[0_10px_24px_rgba(0,0,0,0.14)] md:h-[210px] flex items-center justify-center rotate-[2deg]">
                    <img src={heroImages[0].src} alt={heroImages[0].alt} className="h-full w-full object-cover object-[center_18%]" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-[169px] overflow-hidden rounded-[1.25rem] bg-[#0b6e4b] shadow-[0_10px_24px_rgba(0,0,0,0.14)] md:h-[210px] flex items-center justify-center rotate-[2deg]">
                    <img src={heroImages[2].src} alt={heroImages[2].alt} className="h-full w-full object-cover object-[center_40%]" referrerPolicy="no-referrer" />
                  </div>
                </div>

                <div className="grid gap-2.5">
                  <div className="h-[169px] overflow-hidden rounded-[1.25rem] bg-[#0b6e4b] shadow-[0_10px_24px_rgba(0,0,0,0.14)] md:h-[210px] flex items-center justify-center rotate-[2deg]">
                    <img src={heroImages[1].src} alt={heroImages[1].alt} className="h-full w-full object-cover object-[center_10%]" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-[169px] overflow-hidden rounded-[1.25rem] bg-[#0b6e4b] shadow-[0_10px_24px_rgba(0,0,0,0.14)] md:h-[210px] flex items-center justify-center rotate-[2deg]">
                    <img src={heroImages[3].src} alt={heroImages[3].alt} className="h-full w-full object-cover object-[center_86%]" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#d5fae8] px-4 py-4 md:px-10 md:py-5">
          <div className="mx-auto max-w-[1440px] rounded-[1.3rem] border border-[#b8e4ce] bg-[#bfead8] p-3 shadow-sm md:p-4">
            <div className="relative">
              <div className="mb-4 flex items-center gap-3 pr-0 md:pr-[250px]">
                <span className="h-[2px] w-7 rounded-full bg-[#2f8b72]" />
                <h2 className="font-headline text-xl font-black tracking-tight text-[#124b3a] md:text-[2rem]">Shop by Category</h2>
              </div>

              <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.label}
                      className="group rounded-2xl border border-[#abdcc7] bg-[#9ddfc7] px-3 py-4 text-[#0a6f49] transition hover:bg-[#91d8bf]"
                    >
                      <Icon className="mx-auto h-7 w-7" />
                      <p className="mt-3 text-[11px] font-black uppercase tracking-[0.12em] text-[#12533f] md:text-xs">{category.label}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-2 flex items-center gap-3 rounded-2xl bg-[#0a6f49] px-3 py-2 text-white shadow-[0_10px_22px_rgba(0,0,0,0.14)] md:absolute md:right-1 md:top-0 md:mt-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffca4d] text-[#5c4400]">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/70">Your total</p>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em]">PKR 14,650</p>
                </div>
                <button className="rounded-xl bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#083f31]">
                  View Cart <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-[1440px] rounded-[1.2rem] border border-[#f0be43] bg-[#f3c452] px-4 py-4 shadow-[0_16px_30px_rgba(0,0,0,0.08)] md:px-5 md:py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#5c4400]">Not sure which part you need?</p>
                <p className="mt-1 text-xs font-semibold text-[#6f5200] md:text-sm">Industrial, residential, and same-day guidance from the Emerald Pulse team.</p>
              </div>
              <button className="inline-flex items-center gap-2 self-start rounded-xl bg-[#5c4400] px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white md:self-auto md:text-[11px]">
                Ask an Expert on WhatsApp <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-4 md:px-10 md:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2 className="font-headline text-2xl font-black tracking-tight text-[#083f31] md:text-3xl">Bulbs & Lighting Spotlight</h2>
              </div>
              <button className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0a6f49] md:text-[11px]">View All Lighting →</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {spotlightProducts.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                  className="overflow-hidden rounded-[1.35rem] border border-[#c7f1dd] bg-white shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative bg-[#eefdf5] p-4">
                    <div className="absolute left-4 top-4 rounded-full bg-[#0a6f49] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white">
                      {product.badge}
                    </div>
                    <img src={product.image} alt={product.name} className="mx-auto h-32 w-full object-cover md:h-36" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#6b8a80]">{product.category}</p>
                    <h3 className="mt-1 text-sm font-black text-[#083f31] md:text-[1rem]">{product.name}</h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#58796d]">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <p className="text-base font-black text-[#0a6f49] md:text-[1.2rem]">{product.price}</p>
                      <button className="inline-flex h-9 items-center justify-center rounded-xl bg-[#ffca4d] px-3 text-[10px] font-black uppercase tracking-[0.12em] text-[#5c4400]">
                        Add
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-10 md:py-10">
          <div className="mx-auto grid max-w-[1440px] gap-5 rounded-[1.5rem] bg-[#0a6f49] p-5 text-white shadow-[0_20px_40px_rgba(0,0,0,0.14)] lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-[1.3rem] bg-[#0b5c3f] p-6 md:p-7">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffca4d]">Contractors & electricians</p>
              <h2 className="mt-3 font-headline text-3xl font-black leading-[1] tracking-tight md:text-[3.4rem]">Save more on bulk orders.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/76 md:text-[1rem]">
                Get exclusive bulk pricing, dedicated engineering support, and clear invoicing for your next project.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.12em]">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><BadgeCheck className="h-4 w-4 text-[#ffca4d]" /> Up to 25% off bulk</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><Truck className="h-4 w-4 text-[#ffca4d]" /> Priority stock lock</span>
              </div>

              <button className="mt-7 rounded-xl bg-white px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-[#083f31]">
                Apply for Business Account
              </button>
            </div>

            <div className="min-h-[300px] overflow-hidden rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
              <img
                src="https://picsum.photos/seed/ep-shop-contractors/1200/900"
                alt="Contractor in warehouse"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-4 md:px-10 md:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2 className="font-headline text-2xl font-black tracking-tight text-[#083f31] md:text-3xl">All Electrical Components</h2>
              </div>
              <div className="hidden flex-wrap gap-2 md:flex">
                {["All Parts", "Circuit Breakers", "PVC Conduits", "Distribution Boards", "Solar Inverters"].map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${index === 0 ? "bg-[#0a6f49] text-white" : "bg-[#ecfff6] text-[#0a6f49]"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {componentProducts.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                  className="overflow-hidden rounded-[1.35rem] border border-[#c7f1dd] bg-white shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
                >
                  <div className="bg-[#eefdf5] p-4">
                    <img src={product.image} alt={product.name} className="h-32 w-full object-cover md:h-36" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#6b8a80]">{product.category}</p>
                    <h3 className="mt-1 text-sm font-black text-[#083f31] md:text-[1rem]">{product.name}</h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#58796d]">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <p className="text-base font-black text-[#0a6f49] md:text-[1.2rem]">{product.price}</p>
                      <button className="inline-flex h-9 items-center justify-center rounded-xl bg-[#ffca4d] px-3 text-[10px] font-black uppercase tracking-[0.12em] text-[#5c4400]">
                        Add
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="rounded-xl border border-[#8bcfb0] bg-transparent px-7 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-[#0a6f49] transition hover:bg-[#e7fff3]">
                Load More (16+ Parts)
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-[1440px] rounded-[1.5rem] bg-[#a8f1d8] px-5 py-8 text-center shadow-[0_14px_30px_rgba(0,0,0,0.07)] md:px-8">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0a6f49] md:text-sm">200+ parts in stock</p>
            <h2 className="mt-2 font-headline text-2xl font-black tracking-tight text-[#083f31] md:text-3xl">No-Questions-Asked Refund & Replacement Promise</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "7 day returns",
                "1 year warranty",
                "Factory certified",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/50 px-4 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#0a6f49]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#dff7ed] px-4 py-12 md:px-10 md:py-14">
          <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-4">
            {promiseItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-[1.25rem] bg-white p-5 shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7f1dd] text-[#0a6f49]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black text-[#083f31]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#58796d]">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <PulseAssistant />
    </div>
  );
}