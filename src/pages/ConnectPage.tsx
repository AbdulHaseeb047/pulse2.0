import { motion } from "motion/react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";
import { CONTACT } from "../content/contact";

const supportBadges = [
  "24/7 Support",
  "Verified Experts",
  "Karachi-Wide",
];

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.hqMapQuery)}&z=13&output=embed`;
const liveMetrics = [
  { label: "Active Crews", value: "18" },
  { label: "Avg ETA", value: "24m" },
  { label: "Uptime", value: "99.9%" },
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#d5fae8] text-[#083f31]">
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
        Now serving all areas of Karachi - Free installation on selected electronics
      </div>

      <Header />

      <main className="flex-grow">
        <section className="px-4 pt-5 pb-10 md:px-10 md:pt-8 md:pb-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-2.5">
                    {supportBadges.map((badge) => (
                      <div
                        key={badge}
                        className="inline-flex items-center gap-2 rounded-full bg-[#c5f0de] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a6f49]"
                      >
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {badge}
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4b7266]">Get In Touch</p>
                  <h1 className="mt-2 font-headline text-6xl font-black leading-[0.93] tracking-tight text-[#083f31] md:text-[5.7rem]">
                    Let&apos;s Connect.
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4d6c62] md:text-[1.08rem]">
                    Experience the vital rhythm of Karachi&apos;s premium service network. We&apos;re here to bridge the gap with fast,
                    trusted support.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#bae2d2] bg-white/80 px-4 py-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f7b72]">Phone</p>
                      <p className="mt-1.5 text-base font-semibold text-[#083f31]">{CONTACT.directLine}</p>
                    </div>
                    <div className="rounded-xl border border-[#bae2d2] bg-white/80 px-4 py-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f7b72]">Email</p>
                      <p className="mt-1.5 text-base font-semibold text-[#083f31]">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.article
                initial={{ opacity: 0, y: 30, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.07, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl shadow-[0_22px_42px_rgba(0,0,0,0.18)]"
              >
                <img
                  src="https://picsum.photos/seed/emerald-connect/980/720"
                  alt="Emerald tower"
                  className="h-[300px] w-full object-cover md:h-[390px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02180f]/75 via-[#02180f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-headline text-2xl font-black italic">{CONTACT.hqName}</p>
                  <p className="text-sm text-white/85">{CONTACT.hqArea}</p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 md:px-10 md:pb-14">
          <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.45fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="rounded-2xl border border-[#bddfce] bg-white/85 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:p-7"
            >
              <h2 className="font-headline text-4xl font-black tracking-tight text-[#083f31]">Send us a message</h2>

              <form className="mt-5 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#5f7b72]" htmlFor="full-name">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Doe"
                      className="mt-2 w-full rounded-lg border border-[#b9dfcf] bg-[#d8f5e9] px-4 py-3 text-base text-[#083f31] outline-none transition focus:border-[#0a8f5f] focus:ring-2 focus:ring-[#0a8f5f]/20"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#5f7b72]" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-2 w-full rounded-lg border border-[#b9dfcf] bg-[#d8f5e9] px-4 py-3 text-base text-[#083f31] outline-none transition focus:border-[#0a8f5f] focus:ring-2 focus:ring-[#0a8f5f]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#5f7b72]" htmlFor="service-type">
                    Service Type
                  </label>
                  <select
                    id="service-type"
                    className="mt-2 w-full rounded-lg border border-[#b9dfcf] bg-[#d8f5e9] px-4 py-3 text-base text-[#083f31] outline-none transition focus:border-[#0a8f5f] focus:ring-2 focus:ring-[#0a8f5f]/20"
                    defaultValue="Premium Editorial Support"
                  >
                    <option>Premium Editorial Support</option>
                    <option>AC Maintenance</option>
                    <option>Electrical Services</option>
                    <option>Solar Installation</option>
                    <option>Corporate Contracts</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#5f7b72]" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-[#b9dfcf] bg-[#d8f5e9] px-4 py-3 text-base text-[#083f31] outline-none transition focus:border-[#0a8f5f] focus:ring-2 focus:ring-[#0a8f5f]/20"
                  />
                </div>

                <button
                  type="button"
                  className="rounded-lg bg-[#0a8f5f] px-8 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-md transition hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <div className="space-y-5 lg:pt-6">
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl bg-[#086d4c] p-6 text-white shadow-[0_16px_32px_rgba(7,61,48,0.25)]"
              >
                <div className="absolute -right-5 -top-6 text-white/20">
                  <Sparkles className="h-24 w-24" />
                </div>
                <h3 className="font-headline text-3xl font-black italic">Emergency Booking</h3>
                <p className="mt-2 max-w-sm text-sm text-white/85">
                  Need urgent assistance? Our emergency response team is available 24/7 for critical service alerts.
                </p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#f8bf3d] px-5 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-[#103f32] transition hover:brightness-105">
                  Book Now <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
                className="rounded-2xl border border-[#bddfce] bg-white/85 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a8f5f] text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-headline text-3xl font-black italic text-[#083f31]">WhatsApp Support</h3>
                <p className="mt-2 text-sm text-[#4d6c62]">Chat with our Karachi roots team for real-time updates and quick queries.</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0a6f49]">
                  Open WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>

              <p className="px-1 text-[11px] font-bold uppercase tracking-[0.13em] text-[#4e7468]">
                Common questions? Visit our <span className="text-[#0a6f49] underline underline-offset-4">help center</span>
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 md:px-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto grid max-w-[1440px] overflow-hidden rounded-2xl bg-[#033225] shadow-[0_20px_44px_rgba(0,0,0,0.3)] lg:grid-cols-[0.9fr_1.3fr]"
          >
            <div className="p-7 text-white md:p-10">
              <h2 className="font-headline text-6xl font-black italic leading-[0.92]">Our Karachi HQ</h2>

              <div className="mt-8 space-y-6 text-base text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#8bf8c3]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#85c7ae]">Main Address</p>
                    <p className="mt-1">{CONTACT.addressFull}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 text-[#8bf8c3]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#85c7ae]">Business Hours</p>
                    <p className="mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[#8bf8c3]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#85c7ae]">Direct Line</p>
                    <p className="mt-1">{CONTACT.directLine}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[#8bf8c3]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#85c7ae]">Support Mail</p>
                    <p className="mt-1">{CONTACT.email}</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#0f5b44] bg-[#084532] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#8bf8c3] transition hover:bg-[#0b5f46]">
                Get Driving Directions <Navigation className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-h-[340px] bg-[#021d15] p-3 md:p-4">
              <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#04291f] shadow-[inset_0_0_0_1px_rgba(139,248,195,0.12)]">
                <iframe
                  title="Karachi location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[0.2] contrast-125 saturate-[0.9]"
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(139,248,195,0.22),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(248,191,61,0.18),transparent_42%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(143,230,194,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(143,230,194,0.1)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#02180f]/30 via-transparent to-[#02180f]/45" />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 h-14 bg-gradient-to-b from-[#8bf8c3]/0 via-[#8bf8c3]/25 to-[#8bf8c3]/0"
                  animate={{ y: ["-15%", "110%"] }}
                  transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <div className="absolute left-3 top-3 rounded-full border border-[#89d9b9]/40 bg-[#073f30]/80 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b8f5dc]">Live Karachi Coverage</p>
                </div>

                <div className="absolute right-3 top-3 hidden w-[230px] rounded-xl border border-[#9ce8c8]/25 bg-[#032f24]/75 p-3 backdrop-blur-md md:block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8fe6c2]">Ops Snapshot</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {liveMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-[#0a4a38]/75 px-2 py-2 text-center">
                        <p className="text-[13px] font-black text-white">{metric.value}</p>
                        <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8fe6c2]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-[#9ce8c8]/30 bg-[#043427]/72 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8fe6c2]">Pinned Location</p>
                      <p className="mt-1 text-sm font-semibold text-white">{CONTACT.hqMapQuery}</p>
                    </div>
                    <span className="relative inline-flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8bf8c3] opacity-70" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#8bf8c3]" />
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button type="button" className="rounded-md border border-[#95dfbf]/40 bg-[#0a4a38]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#c5f5e1] transition hover:bg-[#0e5a44]">
                      Set New Pin
                    </button>
                    <button type="button" className="rounded-md border border-[#95dfbf]/40 bg-[#0a4a38]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#c5f5e1] transition hover:bg-[#0e5a44]">
                      Crew Heatmap
                    </button>
                    <button type="button" className="rounded-md border border-[#95dfbf]/40 bg-[#0a4a38]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#c5f5e1] transition hover:bg-[#0e5a44]">
                      Route Assist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <PulseAssistant />
    </div>
  );
}
