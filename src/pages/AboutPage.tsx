import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";

const stats = [
  { value: "15k+", label: "Tasks Done" },
  { value: "500+", label: "Experts" },
  { value: "4.9/5", label: "Rating" },
  { value: "2hr", label: "Response" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We work honestly, keep our pricing clear, and never oversell what you do not need.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We keep standards high, check the details twice, and finish work the right way.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We are a Karachi-first team supporting homes, shops, and growing businesses with care.",
  },
];

const journey = [
  {
    year: "2020",
    title: "The Spark",
    desc: "We started with one small technical desk and a simple promise: make reliable service easy to access.",
  },
  {
    year: "2022",
    title: "Expanding Reach",
    desc: "We built a wider dispatch network and began serving more homes, offices, and local businesses across Karachi.",
  },
  {
    year: "2024",
    title: "Market Leadership",
    desc: "We scaled into a premium service platform with stronger response times, better support, and better quality control.",
  },
];

const leaders = [
  { name: "Omar Farooq", role: "Founder & CEO", image: "https://picsum.photos/seed/emerald-leader-1/500/620" },
  { name: "Zainab Siddiqui", role: "Chief Technology Officer", image: "https://picsum.photos/seed/emerald-leader-2/500/620" },
  { name: "Hamza Khan", role: "Chief Operations Officer", image: "https://picsum.photos/seed/emerald-leader-3/500/620" },
  { name: "Sana Malik", role: "Head of Experience", image: "https://picsum.photos/seed/emerald-leader-4/500/620" },
];

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isInView, setIsInView] = useState(false);

  const getNumericValue = (str: string) => {
    return parseInt(str.replace(/\D/g, ""));
  };

  useEffect(() => {
    if (!isInView) return;

    const numValue = getNumericValue(value);
    let currentValue = 0;
    const increment = Math.ceil(numValue / 50);
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numValue) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(
          value.includes("+")
            ? `${currentValue}+`
            : value.includes("/")
            ? `${(currentValue / 10).toFixed(1)}/5`
            : value.includes("hr")
            ? `${currentValue}hr`
            : currentValue.toString()
        );
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-white/12 bg-white/95 p-4 text-[#083f31] shadow-[0_16px_34px_rgba(0,0,0,0.14)]"
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b6f0d4] text-[#0a6f49]">
        {label === "Tasks Done" && <Wrench className="h-5 w-5" />}
        {label === "Experts" && <Users className="h-5 w-5" />}
        {label === "Rating" && <Star className="h-5 w-5" />}
        {label === "Response" && <Clock3 className="h-5 w-5" />}
      </div>
      <p className="mt-3 text-2xl font-black tracking-tight md:text-[1.9rem]">{displayValue}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5f7b72]">{label}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#d5fae8] text-[#083f31]">
      <div className="bg-primary px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-on-primary md:text-xs">
        Now serving all areas of Karachi - Free installation on selected electronics
      </div>

      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden bg-[#086d4c] px-4 pb-10 pt-8 text-white md:px-10 md:pb-14 md:pt-10">
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/seed/emerald-about-hero/1920/1200"
              alt="Karachi service team"
              className="h-full w-full object-cover opacity-18"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,245,220,0.18),transparent_32%),linear-gradient(135deg,rgba(4,43,32,0.94),rgba(6,109,76,0.92))]" />
          </div>

          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.15)] backdrop-blur-md md:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(248,191,61,0.14),transparent_24%),radial-gradient(circle_at_22%_82%,rgba(139,248,195,0.14),transparent_28%)]" />
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8f5dc]">About Emerald Pulse</p>
                  <h1 className="mt-3 max-w-3xl font-headline text-5xl font-black leading-[0.9] tracking-tight text-[#ecfff3] md:text-[4.6rem] lg:text-[5.6rem]">
                    The Emerald Pulse of Karachi
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/82 md:text-[1.08rem]">
                    Bringing professional excellence to every home and office in the city through reliable, high-speed, on-demand services.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c5f0de] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a6f49]">
                      <ShieldCheck className="h-3.5 w-3.5" /> Verified teams
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c5f0de] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a6f49]">
                      <Clock3 className="h-3.5 w-3.5" /> Fast dispatch
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c5f0de] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a6f49]">
                      <Sparkles className="h-3.5 w-3.5" /> Premium standards
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid grid-cols-2 gap-3"
              >
                {stats.map((item) => (
                  <div key={item.label}>
                    <AnimatedCounter value={item.value} label={item.label} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#55776d]">The Purpose</p>
              <h2 className="mt-2 font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">Our Mission</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4d6c62] md:text-base">
                In a city that never stops moving, Karachi requires services that are as responsive and dynamic as its people.
                Our mission is to bridge the gap between skilled professionals and modern households through a platform built on transparency,
                speed, and unwavering quality.
              </p>
              <blockquote className="mt-6 border-l-2 border-[#86d8b5] pl-4 text-sm italic text-[#537468] md:text-base">
                “We don&apos;t just fix problems; we provide the peace of mind that allows the heartbeat of Karachi to thrive.”
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "24/7 Operations",
                  "Citywide Coverage",
                  "Strict Quality Audits",
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-[#bde8d3] bg-[#f4fff9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a6f49] shadow-sm">
                    <BadgeCheck className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src="https://picsum.photos/seed/emerald-about-mission/900/900"
                alt="Technician working on laptop"
                className="h-[340px] w-full object-cover md:h-[460px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02180f]/25 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-[#e8ffef]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a6f49] backdrop-blur-md">
                Building trust, one service at a time
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#c8f6e3_0%,#dff9ee_46%,#c9f7e4_100%)] px-4 py-12 md:px-10 md:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#91e8c0]/35 blur-3xl" />
            <div className="absolute -right-10 bottom-6 h-56 w-56 rounded-full bg-[#8cdcb8]/35 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1440px] text-center">
            <h2 className="font-headline text-3xl font-black tracking-tight text-[#083f31] md:text-5xl">Our Values</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#0a8f5f]" />
          </div>

          <div className="relative mx-auto mt-8 grid max-w-[1440px] gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-[#0f7d56]/30 bg-[linear-gradient(160deg,#c0f2da,#a6e9c9)] p-5 shadow-[0_14px_32px_rgba(4,69,48,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(4,69,48,0.18)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(224,255,240,0.45),transparent_40%),radial-gradient(circle_at_12%_92%,rgba(12,128,84,0.20),transparent_46%)] opacity-90 transition duration-300 group-hover:opacity-100" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a6f49] text-[#dcfff0] shadow-[0_10px_18px_rgba(10,111,73,0.28)] ring-2 ring-[#d5fae8]/65">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-4 text-lg font-black text-[#084331]">{value.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#195843]">{value.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-[1440px] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#55776d]">The Journey</p>
            <h2 className="mt-2 font-headline text-4xl font-black tracking-tight text-[#083f31] md:text-5xl">How we grew across Karachi</h2>
          </div>

          <div className="mx-auto mt-10 max-w-[1440px]">
            <div className="relative hidden lg:block">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#9ecdb6]" />

              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                    className="relative flex items-center w-full"
                  >
                    {/* Left side */}
                    <div className="w-1/2 flex justify-end pr-10">
                      {index % 2 === 0 && (
                        <article className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_12px_26px_rgba(0,0,0,0.07)]">
                          <p className="text-sm font-semibold text-[#0a8f5f]">{item.year}</p>
                          <h3 className="mt-1 text-lg font-black text-[#083f31]">{item.title}</h3>
                          <p className="mt-2 text-sm text-[#5e7a71]">{item.desc}</p>
                        </article>
                      )}
                    </div>

                    {/* Center dot with horizontal lines */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                      <span className="h-4 w-4 rounded-full border-2 border-white bg-[#0a6f49] shadow-md relative z-10" />
                      {index % 2 === 0 ? (
                        <div className="absolute right-full h-px w-10 bg-[#9ecdb6]" />
                      ) : (
                        <div className="absolute left-full h-px w-10 bg-[#9ecdb6]" />
                      )}
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 flex justify-start pl-10">
                      {index % 2 === 1 && (
                        <article className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_12px_26px_rgba(0,0,0,0.07)]">
                          <p className="text-sm font-semibold text-[#0a8f5f]">{item.year}</p>
                          <h3 className="mt-1 text-lg font-black text-[#083f31]">{item.title}</h3>
                          <p className="mt-2 text-sm text-[#5e7a71]">{item.desc}</p>
                        </article>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:hidden">
              {journey.map((item, index) => (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-2xl bg-white p-5 shadow-[0_12px_26px_rgba(0,0,0,0.07)] md:px-6"
                >
                  <p className="text-sm font-semibold text-[#0a8f5f]">{item.year}</p>
                  <h3 className="mt-1 text-lg font-black text-[#083f31]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#5e7a71]">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#dff7ed] px-4 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-headline text-3xl font-black tracking-tight text-[#083f31] md:text-4xl">Leadership Team</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#5e7a71]">Meet the visionaries driving the Emerald Pulse operations across Karachi.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {leaders.map((leader, index) => (
                <motion.article
                  key={leader.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                >
                  <img src={leader.image} alt={leader.name} className="h-56 w-full object-cover" referrerPolicy="no-referrer" />
                  <div className="p-4">
                    <h3 className="text-sm font-black text-[#083f31]">{leader.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#5e7a71]">{leader.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto max-w-[1440px] rounded-[2rem] bg-[#086d4c] px-6 py-10 text-center text-white shadow-[0_20px_44px_rgba(0,0,0,0.18)] md:px-10 md:py-14"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8f5dc]">Ready to experience the pulse?</p>
            <h2 className="mt-3 font-headline text-3xl font-black tracking-tight md:text-5xl">We are here for your next service, project, or partnership.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 md:text-base">
              Whether you are looking for professional help or want to join our fleet of experts, we&apos;re ready when you are.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-[#f8bf3d] px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#103f32] transition hover:brightness-105 md:px-6">
                Join Our Mission
              </button>
              <button className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/15 md:px-6">
                Book a Service
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <PulseAssistant />
    </div>
  );
}
