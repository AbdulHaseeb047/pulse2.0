import { motion } from "motion/react";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  TriangleAlert,
  Zap,
  Factory,
  Building2,
  UserRound,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";

type Variant = {
  id: string;
  name: string;
  description: string;
  price: string;
  bestFor: string;
  icon: any;
  popular?: boolean;
  bookVariant: string;
};

type ServiceDetail = {
  slug: string;
  title: string;
  label: string;
  subtitle: string;
  heroImage: string;
  nextSlot: string;
  startingPrice: string;
  variants: Variant[];
  checklist: { title: string; desc: string }[];
  testimonials: { quote: string; name: string; role: string; location: string }[];
  related: { slug: string; name: string; desc: string; price: string; icon: any }[];
};

type ProcessStep = {
  title: string;
  desc: string;
};

const services: ServiceDetail[] = [
  {
    slug: "ac-maintenance",
    title: "AC Maintenance",
    label: "TECHNICAL SERVICE",
    subtitle:
      "Full chemical cleaning, gas recharge, and performance restoration for all AC types across Karachi.",
    heroImage: "https://picsum.photos/seed/ep-ac-maintenance/920/1180",
    nextSlot: "Today 2pm-5pm",
    startingPrice: "PKR 2,500",
    variants: [
      {
        id: "general-service",
        name: "General Service",
        description: "Routine filter cleaning, coil wash, and performance check",
        price: "PKR 2,500",
        bestFor: "Regular seasonal maintenance",
        icon: Sparkles,
        bookVariant: "general-service",
      },
      {
        id: "gas-recharge",
        name: "Gas Recharge",
        description: "Refrigerant top-up, leak detection, and pressure testing",
        price: "PKR 3,500",
        bestFor: "AC not cooling properly",
        icon: Gauge,
        bookVariant: "gas-recharge",
      },
      {
        id: "master-service",
        name: "Master Service",
        description: "Full chemical wash, deep clean, gas check, and complete overhaul",
        price: "PKR 5,500",
        bestFor: "Annual deep maintenance",
        icon: Star,
        popular: true,
        bookVariant: "master-service",
      },
      {
        id: "repair-leak",
        name: "Repairing & Leak Repair",
        description: "Fault repair, leak tracing, and sealing with cooling recovery",
        price: "PKR 3,200",
        bestFor: "AC leaking water or showing performance faults",
        icon: Wrench,
        bookVariant: "repair-leak",
      },
      {
        id: "removal-installation",
        name: "AC Removal & Installation",
        description: "Safe dismantling, relocation support, and reinstall service",
        price: "PKR 4,000",
        bestFor: "Shifting home/office or replacing unit position",
        icon: UserRound,
        bookVariant: "removal-installation",
      },
    ],
    checklist: [
      { title: "Full unit inspection", desc: "We assess the AC before starting any work" },
      { title: "Filter cleaning and wash", desc: "Filters removed, cleaned, and reinstalled" },
      { title: "Coil cleaning", desc: "Evaporator and condenser coils cleaned thoroughly" },
      { title: "Drainage pipe check", desc: "Drainage cleared to prevent water leakage" },
      { title: "Thermostat calibration", desc: "Settings verified for optimal temperature control" },
      { title: "Gas pressure check", desc: "Refrigerant level checked and topped if needed" },
      { title: "Electrical connection check", desc: "All wiring and connections inspected for safety" },
      { title: "Performance test", desc: "AC run tested after service to verify cooling" },
      { title: "Digital service report", desc: "Technician shares a digital report after completion" },
      { title: "15-day warranty", desc: "All labor covered under our 15-day service warranty" },
    ],
    testimonials: [
      {
        quote:
          "Called them for AC gas recharge. Technician arrived on time, explained everything before starting, and the AC is cooling perfectly now. Will definitely use again.",
        name: "Bilal Ahmed",
        role: "Homeowner",
        location: "DHA Phase 4",
      },
      {
        quote:
          "Got the Master Service done before summer. They cleaned parts I did not even know existed. Worth every rupee.",
        name: "Fatima Malik",
        role: "House Manager",
        location: "Gulshan-e-Iqbal",
      },
      {
        quote:
          "We have an AMC with them for our office ACs. They are consistent, professional, and always on time.",
        name: "Zubair Khan",
        role: "Office Manager",
        location: "Clifton Block 5",
      },
    ],
    related: [
      {
        slug: "electrician",
        name: "Electrician Services",
        desc: "Wiring checks and electrical repairs",
        price: "From PKR 1,800",
        icon: Zap,
      },
      {
        slug: "chiller-installation",
        name: "Chiller Installation",
        desc: "Large scale cooling for offices",
        price: "Custom Quote",
        icon: Factory,
      },
      {
        slug: "office-ac-contracts",
        name: "Office AC Contracts",
        desc: "Annual maintenance agreements",
        price: "Custom Quote",
        icon: Building2,
      },
    ],
  },
  {
    slug: "electrician",
    title: "Electrician Services",
    label: "TECHNICAL SERVICE",
    subtitle: "Safe diagnostics, wiring fixes, and certified electrical support across Karachi.",
    heroImage: "https://picsum.photos/seed/ep-electrician/920/1180",
    nextSlot: "Today 3pm-6pm",
    startingPrice: "PKR 1,800",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "solar-installation",
    title: "Solar Installation",
    label: "TECHNICAL SERVICE",
    subtitle: "End-to-end solar planning, installation, and performance optimization.",
    heroImage: "https://picsum.photos/seed/ep-solar/920/1180",
    nextSlot: "Tomorrow 10am-1pm",
    startingPrice: "PKR 15,000",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "chiller-installation",
    title: "Chiller Installation",
    label: "TECHNICAL SERVICE",
    subtitle: "Commercial cooling installation and diagnostics for demanding environments.",
    heroImage: "https://picsum.photos/seed/ep-chiller/920/1180",
    nextSlot: "Tomorrow 1pm-4pm",
    startingPrice: "Custom Quote",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "house-wiring",
    title: "House Wiring",
    label: "TECHNICAL SERVICE",
    subtitle: "Complete and partial house wiring upgrades with safety-first standards.",
    heroImage: "https://picsum.photos/seed/ep-house-wiring/920/1180",
    nextSlot: "Today 5pm-7pm",
    startingPrice: "PKR 25,000",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "profile-lighting",
    title: "Profile Lighting",
    label: "TECHNICAL SERVICE",
    subtitle: "Modern profile lighting design and installation for homes and offices.",
    heroImage: "https://picsum.photos/seed/ep-profile-lighting/920/1180",
    nextSlot: "Tomorrow 11am-2pm",
    startingPrice: "PKR 8,000",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "office-ac-contracts",
    title: "Office AC Contracts",
    label: "TECHNICAL SERVICE",
    subtitle: "Annual maintenance contracts for offices with predictable service SLAs.",
    heroImage: "https://picsum.photos/seed/ep-office-ac/920/1180",
    nextSlot: "Tomorrow 9am-12pm",
    startingPrice: "Custom Quote",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    label: "TECHNICAL SERVICE",
    subtitle: "On-site assessments and expert recommendations before major technical decisions.",
    heroImage: "https://picsum.photos/seed/ep-consultancy/920/1180",
    nextSlot: "Today 4pm-6pm",
    startingPrice: "PKR 1,500",
    variants: [],
    checklist: [],
    testimonials: [],
    related: [],
  },
];

const zones = [
  "DHA",
  "Clifton",
  "Gulshan-e-Iqbal",
  "Nazimabad",
  "North Nazimabad",
  "PECHS",
  "Bahadurabad",
  "Saddar",
  "Malir",
  "Korangi",
  "Landhi",
  "FB Area",
  "Johar",
  "Gulistan-e-Johar",
  "Garden",
  "Lyari",
  "Orangi",
  "Surjani",
];

function getServiceBySlug(slug?: string) {
  const target = services.find((item) => item.slug === slug);
  return target || services[0];
}

function getProcessSteps(service: ServiceDetail): ProcessStep[] {
  const bySlug: Record<string, ProcessStep[]> = {
    "ac-maintenance": [
      { title: "Quick Booking", desc: "Choose AC type, pick your slot, and share your Karachi location." },
      { title: "Pulse Match", desc: "We assign a certified AC technician based on your selected issue." },
      { title: "Service Visit", desc: "Technician arrives on time, diagnoses, and completes the agreed scope." },
      { title: "Cool Comfort", desc: "Digital report is shared and you pay only after satisfaction." },
    ],
    "solar-installation": [
      { title: "Site Intake", desc: "Share load details and location so we can size your system correctly." },
      { title: "Design Match", desc: "We prepare the right panel and inverter configuration for your site." },
      { title: "Install Day", desc: "Team installs and commissions your system with safety checks." },
      { title: "Power On", desc: "Performance handover and digital report are shared after completion." },
    ],
    electrician: [
      { title: "Quick Booking", desc: "Tell us the fault, choose your time, and confirm your area." },
      { title: "Pulse Match", desc: "Certified electrician is assigned for your exact electrical issue." },
      { title: "Service Visit", desc: "On-site troubleshooting and fix with tested safe output." },
      { title: "Safe Finish", desc: "Work summary is shared and payment is made after satisfaction." },
    ],
    "chiller-installation": [
      { title: "Requirement Share", desc: "Tell us your cooling load and commercial site details." },
      { title: "Engineering Match", desc: "We assign the right technical team and installation plan." },
      { title: "Commissioning", desc: "Installation, pressure checks, and functional testing on site." },
      { title: "Operational Handover", desc: "Digital report, training notes, and post-install support start." },
    ],
  };

  return (
    bySlug[service.slug] || [
      { title: "Quick Booking", desc: `Choose your ${service.title} requirement and preferred time slot.` },
      { title: "Pulse Match", desc: "We assign the best certified specialist based on your requirement." },
      { title: "Service Visit", desc: "Technician arrives on time and confirms scope before work starts." },
      { title: "Comfy Completion", desc: "Service is completed, digital report is shared, and you pay after satisfaction." },
    ]
  );
}

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = useMemo(() => getServiceBySlug(serviceSlug), [serviceSlug]);
  const bookServiceHref = `/book?service=${service.slug}`;
  const processSteps = useMemo(() => getProcessSteps(service), [service]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#d5fae8] text-[#083f31]">
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
        Now serving all areas of Karachi - Free installation on selected electronics
      </div>
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#073b2d] via-[#0a5c43] to-[#063124] px-4 py-9 md:min-h-[45vh] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(248,191,61,0.22),transparent_36%)]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>›</span>
              <span className="text-[#f8bf3d]">{service.title}</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f8bf3d]">{service.label}</p>
                <h1 className="mt-2 font-headline text-6xl font-black leading-[0.9] tracking-tight text-white md:text-[5.4rem]">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">{service.subtitle}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={bookServiceHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#f8bf3d] px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#103f32] shadow-[0_12px_22px_rgba(248,191,61,0.35)] transition hover:brightness-105"
                  >
                    <Calendar className="h-4 w-4" />
                    Book This Service
                  </Link>
                  <Link
                    to="/connect"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-transparent px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Get a Free Quote
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
                    <Clock3 className="h-3.5 w-3.5 text-[#8bf8c3]" /> 1-3 Hours avg duration
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
                    <MapPin className="h-3.5 w-3.5 text-[#8bf8c3]" /> All Karachi Areas
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#8bf8c3]" /> 15-Day Warranty
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#f8bf3d]/25 blur-3xl" />
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#042b1f] shadow-[0_28px_52px_rgba(0,0,0,0.3)]">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="h-[420px] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                    <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8bf8c3]">
                      <span className="h-2 w-2 rounded-full bg-[#8bf8c3]" /> Technicians Available Today
                    </p>
                    <p className="mt-1 text-sm font-black text-white">Next slot: {service.nextSlot}</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f8bf3d]">3 slots remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-6 md:px-10 md:py-8">
          <div className="mx-auto grid max-w-[1440px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, value: "1-3 Hours", label: "Average Duration" },
              { icon: MapPin, value: "All Karachi", label: "Service Coverage" },
              { icon: CheckCircle2, value: "Digital Report", label: "Service Reporting" },
              { icon: ShieldCheck, value: "15 Days", label: "Service Warranty" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-[#f8fffc] p-4 shadow-[0_10px_22px_rgba(5,94,63,0.12)]">
                <item.icon className="h-7 w-7 text-[#0a6f49]" />
                <p className="mt-3 font-headline text-xl font-black text-[#083f31]">{item.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5f7b72]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="variants" className="bg-[#c9f6e4] px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8a6300]">Choose your service type</p>
            <h2 className="mt-2 font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">What do you need done?</h2>
            <p className="mt-3 text-sm text-[#4d6c62] md:text-base">Tap one option and go straight to booking with service and type already pre-filled.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {service.variants.map((variant) => {
                const Icon = variant.icon;
                return (
                  <motion.article
                    key={variant.id}
                    whileHover={{ y: -4 }}
                    className="relative rounded-xl border-2 border-transparent bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition"
                  >
                    {variant.popular ? (
                      <span className="absolute left-3 top-3 rounded-full bg-[#f8bf3d] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#4e3900]">Most Popular</span>
                    ) : null}

                    <Icon className="mx-auto mt-4 h-9 w-9 text-[#0a6f49]" />
                    <h3 className="mt-3 text-center font-headline text-xl font-black text-[#083f31]">{variant.name}</h3>
                    <p className="mt-1 text-center text-sm text-[#4d6c62]">{variant.description}</p>
                    <div className="my-3 h-px w-full bg-[#d0efe2]" />
                    <p className="text-center text-xs font-bold uppercase tracking-[0.12em] text-[#67867b]">From</p>
                    <p className="text-center font-headline text-2xl font-black text-[#0a6f49]">{variant.price}</p>
                    <p className="mt-1 text-center text-[11px] text-[#5f7b72]">Best for: {variant.bestFor}</p>

                    <div className="mt-4">
                      <Link
                        to={`/book?service=${service.slug}&variant=${variant.bookVariant}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f8bf3d] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#4e3900] transition hover:brightness-105"
                      >
                        Book This Type <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-[#7ecfb0] bg-gradient-to-r from-[#def9ee] to-[#ccf5e5] p-4 md:p-5">
              <div className="flex flex-wrap items-center gap-3 text-[#225244]">
                <ShieldCheck className="h-5 w-5 text-[#0a6f49]" />
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0a6f49]">Free Online Consultancy</p>
              </div>
              <p className="mt-2 text-sm text-[#225244]">Not sure which service type is right? Get instant guidance first, then book with confidence.</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <Link
                  to="/connect"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0a6f49] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(10,111,73,0.25)]"
                >
                  Get Free Online Consultancy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link to="/connect" className="inline-flex items-center rounded-lg border border-[#0a6f49] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#0a6f49]">Chat on WhatsApp</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">What's Included in Every Booking</h2>
            <p className="mt-2 text-sm text-[#4d6c62] md:text-base">Regardless of which variant you choose, every booking includes these as standard.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.checklist.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-xl bg-[#f8fffc] p-4 shadow-[0_8px_20px_rgba(5,94,63,0.08)]">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 text-[#0a6f49]" />
                  <div>
                    <p className="text-sm font-black text-[#083f31] md:text-base">{item.title}</p>
                    <p className="text-xs text-[#5f7b72] md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-[#f0be43] bg-[#fff4d2] px-4 py-3 text-sm text-[#5d4a15]">
              <TriangleAlert className="h-5 w-5 text-[#8a6300]" />
              <p className="flex-1">Need something not on this list? We offer custom scopes. Contact us before booking and we will quote you directly.</p>
              <Link to="/connect" className="text-[11px] font-black uppercase tracking-[0.12em] text-[#8a6300] underline underline-offset-4">Contact Us</Link>
            </div>
          </div>
        </section>



        <section className="bg-[#c9f6e4] px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px] text-center">
            <h2 className="font-headline text-4xl font-black tracking-tight text-[#103f32] md:text-5xl">The Pulse Process</h2>
            <p className="mt-2 text-sm text-[#3f6a5b] md:text-base">From booking to completion in 4 easy steps.</p>

            <div className="relative mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-[#7fcdb0] lg:block" />
              {processSteps.map((item, idx) => (
                <div key={item.title} className="relative z-10 rounded-xl p-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8ee3c5] text-3xl font-black text-[#0a6f49] shadow-[0_10px_24px_rgba(16,111,73,0.2)]">
                    {idx + 1}
                  </div>
                  <p className="mt-3 text-sm font-black uppercase tracking-[0.1em] text-[#184f3f]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#3f6a5b]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-[#9edfc2] bg-[#e8faef] p-4 text-sm text-[#2b5a4a]">
              For same-day bookings place your order before 12pm · WhatsApp us for urgent requests
            </div>
          </div>
        </section>

        <section className="bg-[#c9f6e4] px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">We Cover All of Karachi</h2>
              <p className="mt-2 text-sm text-[#4d6c62] md:text-base">Our technicians operate across all major areas. Book from anywhere in the city.</p>
              <p className="mt-3 text-sm text-[#4d6c62]">Do not see your area listed? Call us. We almost certainly cover it and add new areas every month.</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link to="/connect" className="rounded-lg bg-[#f8bf3d] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#4e3900]">Check My Area →</Link>
                <Link to="/connect" className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0a6f49] underline underline-offset-4">Or WhatsApp us your location</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-[#084634] p-5 text-white shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#f8bf3d]">Currently Serving</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {zones.map((area) => (
                  <span key={area} className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white/90">{area}</span>
                ))}
              </div>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#f8bf3d]">500+ jobs completed across Karachi</p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="text-center font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">What Customers Say About This Service</h2>
            <p className="mt-2 text-center text-sm text-[#4d6c62] md:text-base">Real customers. Real jobs. Real results.</p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {service.testimonials.map((item) => (
                <article key={item.name} className="relative rounded-xl bg-[#f8fffc] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <p className="text-sm font-black text-[#f8bf3d]">★★★★★</p>
                  <span className="absolute right-4 top-4 rounded-full bg-[#d7f8eb] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0a6f49]">AC Maintenance</span>
                  <p className="mt-3 text-sm italic leading-relaxed text-[#245346]">"{item.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-[#bfead8]" />
                    <div>
                      <p className="text-sm font-black text-[#083f31]">{item.name}</p>
                      <p className="text-xs text-[#5f7b72]">{item.role}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-[#effaf5] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0a6f49]">{item.location}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-center"><Link to="/connect" className="text-[11px] font-black uppercase tracking-[0.12em] text-[#8a6300]">Read more reviews →</Link></p>
          </div>
        </section>

        <section className="bg-[#c9f6e4] px-4 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">You Might Also Need</h2>
            <p className="mt-2 text-sm text-[#4d6c62] md:text-base">Customers who booked {service.title} also booked these.</p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {service.related.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-xl bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d7f8eb] text-[#0a6f49]"><Icon className="h-5 w-5" /></span>
                      <div className="flex-1">
                        <p className="text-base font-black text-[#083f31]">{item.name}</p>
                        <p className="mt-1 text-sm text-[#4d6c62]">{item.desc}</p>
                        <p className="mt-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#5f7b72]">{item.price}</p>
                        <p className="mt-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#8a6300]">View Service →</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#063f2f] px-4 py-12 text-white md:px-10 md:py-16">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="font-headline text-4xl font-black tracking-tight md:text-5xl">Ready to book {service.title}?</h2>
            <p className="mt-2 text-sm text-white/75 md:text-base">Slots fill up fast in summer. Book now to secure your preferred time.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to={bookServiceHref} className="inline-flex items-center gap-2 rounded-xl bg-[#f8bf3d] px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#103f32]">Book This Service</Link>
              <Link to="/connect" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-white">Get a Free Quote</Link>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
              <span>No payment upfront</span>
              <span>·</span>
              <span>Confirmed within 2 hours</span>
              <span>·</span>
              <span>Free cancellation</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PulseAssistant />
    </div>
  );
}
