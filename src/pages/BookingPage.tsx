import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ChevronRight,
  Check,
  Clock,
  Zap,
  Lightbulb,
  Wind,
  Wrench,
  AlertCircle,
  Calendar as CalendarIcon,
  MapPin,
  Phone,
  Mail,
  Copy,
  ChevronLeft,
  CheckCircle2,
  MessageCircle,
  Droplet,
  Home,
  Building2,
  Sun,
  Cloud,
  Sunset,
  ChevronDown,
  Flag,
  User,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseAssistant from "../components/PulseAssistant";
import { CONTACT } from "../content/contact";

interface FormData {
  service: string;
  variant: string;
  materials: "without" | "with";
  date: Date | null;
  timeSlot: "morning" | "afternoon" | "evening" | null;
  area: string;
  address: string;
  instructions: string;
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  source: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface ServiceOption {
  id: string;
  name: string;
  icon: any;
  price: string;
  variants: VariantOption[];
}

interface VariantOption {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
}

const services: ServiceOption[] = [
  {
    id: "ac-maintenance",
    name: "AC Maintenance",
    icon: Wind,
    price: "2,500",
    variants: [
      { id: "general-service", name: "General Service", description: "Routine cleaning and checkup", priceMin: 2500, priceMax: 3500 },
      { id: "gas-recharge", name: "Gas Recharge", description: "Refrigerant top-up and leak fix", priceMin: 3500, priceMax: 4500 },
      { id: "master-service", name: "Master Service", description: "Full deep clean and parts check", priceMin: 5500, priceMax: 7500 },
      { id: "repair-leak", name: "Repairing & Leak Repair", description: "Fault repair, leak tracing, and sealing", priceMin: 3200, priceMax: 5200 },
      { id: "removal-installation", name: "AC Removal & Installation", description: "Safe dismantling and reinstall service", priceMin: 4000, priceMax: 7000 },
    ],
  },
  {
    id: "electrician",
    name: "Electrician Services",
    icon: Zap,
    price: "1,800",
    variants: [
      { id: "install", name: "Installation", description: "New wiring and fixtures", priceMin: 2000, priceMax: 5000 },
      { id: "repair", name: "Repair", description: "Fix faults and maintenance", priceMin: 1800, priceMax: 3500 },
      { id: "fault", name: "Fault Finding", description: "Diagnose electrical issues", priceMin: 1500, priceMax: 2500 },
      { id: "audit", name: "Safety Audit", description: "Complete electrical check", priceMin: 3000, priceMax: 5000 },
    ],
  },
  {
    id: "solar",
    name: "Solar Installation",
    icon: Sun,
    price: "15,000",
    variants: [
      { id: "residential", name: "Residential", description: "Home solar system setup", priceMin: 150000, priceMax: 300000 },
      { id: "commercial", name: "Commercial", description: "Business scale installation", priceMin: 300000, priceMax: 800000 },
      { id: "upgrade", name: "Upgrade", description: "Expand existing system", priceMin: 50000, priceMax: 150000 },
      { id: "maintain", name: "Maintenance", description: "Panel cleaning and repair", priceMin: 2500, priceMax: 5000 },
    ],
  },
  {
    id: "chiller",
    name: "Chiller Installation",
    icon: Droplet,
    price: "Custom",
    variants: [
      { id: "install", name: "New Installation", description: "Full chiller setup", priceMin: 200000, priceMax: 500000 },
      { id: "repair", name: "Repair", description: "Fix and restore", priceMin: 5000, priceMax: 25000 },
      { id: "maintain", name: "Maintenance", description: "Regular service contract", priceMin: 10000, priceMax: 30000 },
      { id: "consult", name: "Consultancy", description: "System assessment", priceMin: 5000, priceMax: 10000 },
    ],
  },
  {
    id: "house-wiring",
    name: "House Wiring",
    icon: Wrench,
    price: "25,000",
    variants: [
      { id: "new", name: "New Wiring", description: "Complete house rewire", priceMin: 80000, priceMax: 200000 },
      { id: "partial", name: "Partial Update", description: "Rewire specific rooms", priceMin: 25000, priceMax: 60000 },
      { id: "safety", name: "Safety Upgrade", description: "Modernize old wiring", priceMin: 40000, priceMax: 100000 },
      { id: "fault", name: "Fault Rectification", description: "Fix wiring issues", priceMin: 5000, priceMax: 15000 },
    ],
  },
  {
    id: "profile-lighting",
    name: "Profile Lighting",
    icon: Lightbulb,
    price: "8,000",
    variants: [
      { id: "led", name: "LED Profile", description: "Modern LED strip installation", priceMin: 8000, priceMax: 15000 },
      { id: "design", name: "Design Consultation", description: "Custom lighting plan", priceMin: 3000, priceMax: 8000 },
      { id: "install", name: "Full Installation", description: "Design + installation", priceMin: 15000, priceMax: 40000 },
      { id: "upgrade", name: "Upgrade Existing", description: "Enhance current lighting", priceMin: 5000, priceMax: 12000 },
    ],
  },
  {
    id: "office-ac",
    name: "Office AC Contracts",
    icon: Building2,
    price: "Custom",
    variants: [
      { id: "maintenance", name: "Annual Maintenance", description: "12-month service plan", priceMin: 30000, priceMax: 100000 },
      { id: "emergency", name: "Emergency Support", description: "24/7 emergency coverage", priceMin: 50000, priceMax: 150000 },
      { id: "audit", name: "System Audit", description: "Complete system assessment", priceMin: 15000, priceMax: 40000 },
      { id: "upgrade", name: "System Upgrade", description: "Replace/upgrade units", priceMin: 150000, priceMax: 500000 },
    ],
  },
  {
    id: "consultancy",
    name: "Consultancy",
    icon: Home,
    price: "1,500",
    variants: [
      { id: "hvac", name: "HVAC Consultation", description: "Cooling system advice", priceMin: 2000, priceMax: 5000 },
      { id: "electrical", name: "Electrical Consultation", description: "Wiring and safety advice", priceMin: 1500, priceMax: 3500 },
      { id: "solar", name: "Solar Consultation", description: "Solar system planning", priceMin: 5000, priceMax: 10000 },
      { id: "general", name: "General Maintenance", description: "Home maintenance advice", priceMin: 1500, priceMax: 3000 },
    ],
  },
];

const karachiAreas = {
  South: ["Clifton", "DHA", "Saddar", "Garden"],
  Central: ["PECHS", "Bahadurabad", "Gulshan-e-Iqbal", "Nazimabad"],
  North: ["FB Area", "North Nazimabad", "Gulistan-e-Johar", "Johar"],
  East: ["Malir", "Korangi", "Landhi"],
  West: ["Orangi", "Baldia", "SITE"],
};

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: searchParams.get("service") || "",
    variant: searchParams.get("variant") || "",
    materials: "without",
    date: null,
    timeSlot: null,
    area: "",
    address: "",
    instructions: "",
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    source: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  const [copied, setCopied] = useState(false);
  const autoAdvanceLockRef = useRef("");
  const addressRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const sourceRef = useRef<HTMLSelectElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  // Initialize service/variant if passed in URL
  useEffect(() => {
    if (searchParams.get("service")) {
      setFormData((prev) => ({
        ...prev,
        service: searchParams.get("service") || "",
        variant: searchParams.get("variant") || "",
      }));
    }
  }, [searchParams]);

  const validateField = (fieldName: string, value: any): string => {
    switch (fieldName) {
      case "name":
        return value && value.trim() ? "" : "Full name is required";
      case "phone":
        const phoneRegex = /^\+92\s?\d{3}-?\d{7}$|^0\d{10,11}$/;
        return value && phoneRegex.test(value) ? "" : "Please enter a valid Pakistani phone number";
      case "consent":
        return value ? "" : "You must agree to proceed";
      default:
        return "";
    }
  };

  const currentService = services.find((s) => s.id === formData.service);
  const currentVariant = currentService?.variants.find((v) => v.id === formData.variant);

  const estimatedPrice = currentVariant
    ? { min: currentVariant.priceMin, max: currentVariant.priceMax }
    : null;

  // Check form completion by step
  const isStep1Complete = formData.service && formData.variant && formData.materials;
  const isStep2Complete = formData.date && formData.timeSlot && formData.area && formData.address;
  const isStep3Complete = formData.name && formData.phone && formData.consent;
  const isStep3Valid =
    !validateField("name", formData.name) &&
    !validateField("phone", formData.phone) &&
    !validateField("consent", formData.consent);

  const handleServiceSelect = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      variant: "", // Reset variant when service changes
    }));
    setErrors({});
  };

  const handleVariantSelect = (variantId: string) => {
    setFormData((prev) => ({
      ...prev,
      variant: variantId,
    }));
    setErrors({});
  };

  const handleDateSelect = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date,
      timeSlot: null, // Reset time when date changes
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const inputElement = e.target as HTMLInputElement;
    const checked = inputElement.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field once user corrects it
    if (errors[name]) {
      const error = validateField(name, type === "checkbox" ? checked : value);
      if (!error) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const handleWhatsAppSame = (checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        whatsapp: prev.phone,
      }));
    }
  };

  const handleContinue = () => {
    if (step === 1 && !isStep1Complete) return;
    if (step === 2 && !isStep2Complete) return;
    if (step === 3) {
      // Validate step 3
      const newErrors: FormErrors = {};
      if (!formData.name) newErrors.name = validateField("name", "");
      if (!formData.phone) newErrors.phone = validateField("phone", "");
      if (!formData.consent) newErrors.consent = validateField("consent", false);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      handleConfirmBooking();
      return;
    }

    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (bookingSubmitted || reviewMode) {
      return;
    }

    if (step === 1 && isStep1Complete) {
      const lockKey = `${step}-complete`;
      if (autoAdvanceLockRef.current === lockKey) return;
      autoAdvanceLockRef.current = lockKey;
      const timeoutId = window.setTimeout(() => setStep(2), 260);
      return () => window.clearTimeout(timeoutId);
    }

    if (step === 2 && isStep2Complete) {
      const lockKey = `${step}-complete`;
      if (autoAdvanceLockRef.current === lockKey) return;
      autoAdvanceLockRef.current = lockKey;
      const timeoutId = window.setTimeout(() => setStep(3), 260);
      return () => window.clearTimeout(timeoutId);
    }

    autoAdvanceLockRef.current = "";
  }, [
    step,
    isStep1Complete,
    isStep2Complete,
    bookingSubmitted,
    reviewMode,
  ]);

  const handleConfirmBooking = () => {
    const reference = `EP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 100000)).padStart(5, "0")}`;
    setBookingReference(reference);
    setBookingSubmitted(true);
    setReviewMode(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bookingReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  // Success screen
  if (bookingSubmitted) {
    return (
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
        <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
          {CONTACT.addressShort}
        </div>
        <Header />
        <main className="flex-grow px-4 py-10 md:py-16">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-8 shadow-lg md:p-12"
            >
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container"
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              <h1 className="text-center font-headline text-4xl font-black text-on-background md:text-5xl">
                Booking Received!
              </h1>
              <p className="mt-2 text-center text-on-surface-variant">
                We'll call you within 2 hours to confirm.
              </p>

              {/* Booking reference */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-auto mt-8 max-w-sm rounded-2xl border-2 border-primary-container bg-primary-container/30 p-6 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                  Your Booking Reference
                </p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <p className="font-headline text-3xl font-black text-primary">
                    {bookingReference}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="rounded-lg bg-secondary-container p-2 text-on-secondary-container transition hover:brightness-95"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-primary font-bold"
                  >
                    Copied!
                  </motion.p>
                )}
                <p className="mt-3 text-[11px] text-on-surface-variant">
                  Save this number to track your booking
                </p>
              </motion.div>

              {/* What happens next */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto mt-8 max-w-sm space-y-4"
              >
                <p className="text-center text-sm font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                  What happens next
                </p>
                <div className="space-y-3">
                  {[
                    "We call to confirm within 2 hours",
                    "Technician assigned and dispatched",
                    "Job done — pay after completion",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Check className="h-3.5 w-3.5 text-on-primary" />
                      </div>
                      <p className="text-sm text-on-surface-variant">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-3"
              >
                <button className="w-full rounded-2xl bg-secondary-container px-6 py-4 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-on-secondary-container transition hover:brightness-95">
                  Track My Booking
                </button>
                <button className="w-full rounded-2xl border-2 border-primary bg-transparent px-6 py-4 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-primary transition hover:bg-primary/5">
                  Book Another Service
                </button>
                <button className="w-full rounded-2xl bg-transparent px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-primary transition hover:text-primary/70">
                  Return to Homepage →
                </button>
              </motion.div>

              {/* WhatsApp note */}
              <p className="mt-6 text-center text-[11px] text-on-surface-variant">
                A booking summary will be sent to your WhatsApp number shortly.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
        <PulseAssistant />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-[10px] md:text-xs font-label tracking-[0.14em] uppercase font-bold">
        {CONTACT.addressShort}
      </div>
      <Header />

      {/* Sticky progress bar */}
      <div className="fixed left-0 right-0 top-[84px] z-50 border-b-2 border-primary-container bg-surface-container-lowest/95 shadow-sm backdrop-blur-md md:top-[92px]">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-10">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[1, 2, 3].map((stepNum, idx) => (
              <div key={stepNum} className="flex items-center gap-4 md:gap-8">
                <motion.div
                  animate={{
                    backgroundColor: 
                      stepNum <= step ? "#006947" : "transparent",
                    borderColor: "#8bf8c3",
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 flex-shrink-0"
                >
                  <span className="font-headline text-sm font-black text-white md:text-base">
                    {stepNum < step ? <Check className="h-5 w-5" /> : stepNum}
                  </span>
                </motion.div>
                <div className="hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                    {stepNum === 1 && "Choose Service"}
                    {stepNum === 2 && "Schedule & Location"}
                    {stepNum === 3 && "Your Details"}
                  </p>
                </div>

                {stepNum < 3 && (
                  <div className="hidden h-1 w-8 flex-shrink-0 rounded-full bg-primary-container/30 md:block lg:w-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[110px] md:h-[118px]" />

      <main className="flex-grow px-4 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Page header */}
          {!reviewMode && (
            <div className="mb-10 grid gap-8 rounded-3xl bg-gradient-to-br from-[#0a5c3e] to-[#063d2c] px-6 py-8 text-white md:grid-cols-2 md:px-10 md:py-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-container">
                  Book a Service
                </p>
                <h1 className="mt-3 font-headline text-4xl font-black leading-tight md:text-5xl">
                  Let's Fix Your Space.
                </h1>
                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  Fill in your details below and we'll confirm your booking within 2 hours. Available Mon–Sat, 9am–7pm across all Karachi areas.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                {[
                  "Confirmed within 2 hours",
                  "No payment until job is done",
                  "Free cancellation up to 2 hours before",
                ].map((trust, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-primary-container/20 bg-white/10 px-3.5 py-3 backdrop-blur-md">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary-container" />
                    <p className="text-xs font-semibold text-white/90 md:text-sm">{trust}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Review mode */}
          {reviewMode && (
            <div className="mx-auto max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-8 shadow-lg md:p-10"
              >
                <div className="mb-6 flex items-center gap-3 border-b-2 border-primary-container/20 pb-4">
                  <Check className="h-6 w-6 text-primary" />
                  <h2 className="font-headline text-2xl font-black text-on-background">
                    Review Your Booking
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Service block */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Service
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {currentService?.name} — {currentVariant?.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Materials
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.materials === "with" ? "With Materials" : "Without Materials"}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Estimated Price
                      </p>
                      <span className="text-lg font-black text-primary">
                        PKR {estimatedPrice?.min.toLocaleString()} – PKR {estimatedPrice?.max.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Schedule block */}
                  <div className="border-t-2 border-primary-container/30 pt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Date
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.date?.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Time
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.timeSlot === "morning" && "Morning (9am – 12pm)"}
                        {formData.timeSlot === "afternoon" && "Afternoon (12pm – 4pm)"}
                        {formData.timeSlot === "evening" && "Evening (4pm – 7pm)"}
                      </span>
                    </div>
                  </div>

                  {/* Location block */}
                  <div className="border-t-2 border-primary-container/30 pt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Area
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.area}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Address
                      </p>
                      <span className="text-right text-sm font-bold text-on-background">
                        {formData.address}
                      </span>
                    </div>
                  </div>

                  {/* Details block */}
                  <div className="border-t-2 border-primary-container/30 pt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Name
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.name}
                      </span>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Phone
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.phone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        WhatsApp
                      </p>
                      <span className="text-sm font-bold text-on-background">
                        {formData.whatsapp}
                      </span>
                    </div>
                  </div>

                  {/* Confirmation box */}
                  <div className="mt-8 rounded-2xl border-2 border-secondary-container bg-secondary-container/20 p-4">
                    <p className="text-center text-sm font-semibold text-on-background">
                      We will call you within 2 hours to confirm exact pricing and technician assignment. No payment required until the job is done.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-between">
                    <button
                      onClick={() => setReviewMode(false)}
                      className="rounded-2xl border-2 border-primary bg-transparent px-6 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-primary transition hover:bg-primary/5"
                    >
                      ← Edit Booking
                    </button>
                    <button
                      onClick={handleConfirmBooking}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-secondary-container px-6 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-on-secondary-container transition hover:brightness-95 md:px-8"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Form - not in review mode */}
          {!reviewMode && (
            <div className="grid gap-8 lg:grid-cols-[1fr_350px] lg:items-start">
              {/* Main form */}
              <div className="mx-auto w-full max-w-2xl lg:mx-0">
                {/* STEP 1 */}
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-8 shadow-lg md:p-10"
                    >
                      <h2 className="font-headline text-2xl font-black text-on-background md:text-3xl">
                        What do you need help with?
                      </h2>

                      {/* Service selector */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const isSelected = formData.service === service.id;
                          return (
                            <motion.button
                              key={service.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleServiceSelect(service.id)}
                              className={`relative rounded-2xl border-2 p-4 text-left transition ${
                                isSelected
                                  ? "border-secondary-container bg-primary-container/10"
                                  : "border-primary-container/20 bg-surface-container-lowest hover:border-primary-container/40"
                              }`}
                            >
                              <Icon className="h-6 w-6 text-primary" />
                              <p className="mt-3 font-headline text-sm font-black text-on-background md:text-base">
                                {service.name}
                              </p>
                              <p className="mt-1 text-xs text-on-surface-variant">
                                From PKR {service.price}
                              </p>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-3 top-3 rounded-full bg-secondary-container p-1"
                                >
                                  <Check className="h-4 w-4 text-on-secondary-container" />
                                </motion.div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Variant selector */}
                      {formData.service && (
                        <motion.div
                          key="variants"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-8 overflow-hidden"
                        >
                          <h3 className="mb-4 font-headline text-lg font-black text-on-background">
                            Which type of service do you need?
                          </h3>
                          <div className="space-y-3">
                            {currentService?.variants.map((variant) => {
                              const isSelected = formData.variant === variant.id;
                              return (
                                <motion.button
                                  key={variant.id}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  onClick={() => handleVariantSelect(variant.id)}
                                  className={`flex items-center justify-between rounded-2xl border-2 p-4 text-left transition ${
                                    isSelected
                                      ? "border-secondary-container bg-primary-container/10"
                                      : "border-primary-container/20 bg-surface-container-lowest hover:border-primary-container/40"
                                  }`}
                                >
                                  <div className="flex-grow">
                                    <p className="font-headline text-sm font-black text-on-background">
                                      {variant.name}
                                    </p>
                                    <p className="mt-1 text-xs text-on-surface-variant">
                                      {variant.description}
                                    </p>
                                  </div>
                                  <p className="ml-4 whitespace-nowrap text-xs font-bold text-primary md:text-sm">
                                    PKR {variant.priceMin.toLocaleString()}
                                  </p>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="ml-4 rounded-full bg-secondary-container p-1"
                                    >
                                      <Check className="h-4 w-4 text-on-secondary-container" />
                                    </motion.div>
                                  )}
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Materials toggle */}
                      {formData.variant && (
                        <motion.div
                          key="materials"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-8 overflow-hidden"
                        >
                          <h3 className="mb-4 font-headline text-lg font-black text-on-background">
                            Do you need materials supplied?
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[
                              {
                                value: "without",
                                icon: Wrench,
                                title: "Without Materials",
                                desc: "You supply parts, we bring expertise",
                              },
                              {
                                value: "with",
                                icon: AlertCircle,
                                title: "With Materials",
                                desc: "We supply everything",
                              },
                            ].map((option: any) => {
                              const Icon = option.icon;
                              const isSelected = formData.materials === option.value;
                              return (
                                <motion.button
                                  key={option.value}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      materials: option.value,
                                    }))
                                  }
                                  className={`rounded-2xl border-2 p-4 text-left transition ${
                                    isSelected
                                      ? "border-secondary-container bg-primary-container/10"
                                      : "border-primary-container/20 bg-surface-container-lowest hover:border-primary-container/40"
                                  }`}
                                >
                                  <Icon className="h-5 w-5 text-primary" />
                                  <p className="mt-2 font-headline text-sm font-black text-on-background">
                                    {option.title}
                                  </p>
                                  <p className="mt-1 text-xs text-on-surface-variant">
                                    {option.desc}
                                  </p>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Price estimate */}
                      {estimatedPrice && (
                        <motion.div
                          key="price"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 rounded-2xl border-2 border-primary-container bg-primary-container/20 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                                Estimated Price Range
                              </p>
                              <motion.p
                                key={`${estimatedPrice.min}-${estimatedPrice.max}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="mt-1 font-headline text-2xl font-black text-primary"
                              >
                                PKR {estimatedPrice.min.toLocaleString()} – PKR{" "}
                                {estimatedPrice.max.toLocaleString()}
                              </motion.p>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] text-on-surface-variant">
                                Final price confirmed after site assessment
                              </p>
                            </div>
                          </div>
                          <p className="mt-3 text-xs font-bold text-secondary-container">
                            No payment required until job is completed
                          </p>
                        </motion.div>
                      )}

                      {/* Continue button */}
                      <motion.button
                        whileHover={isStep1Complete ? { scale: 1.02 } : {}}
                        whileTap={isStep1Complete ? { scale: 0.98 } : {}}
                        onClick={handleContinue}
                        disabled={!isStep1Complete}
                        className={`mt-8 w-full rounded-2xl px-6 py-4 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-on-secondary-container transition ${
                          isStep1Complete
                            ? "animate-pulse bg-secondary-container hover:brightness-95"
                            : "cursor-not-allowed bg-surface-container/50 text-on-surface-variant/50"
                        }`}
                      >
                        Continue to Schedule →
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* STEP 2 */}
                <AnimatePresence mode="wait">
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-8 shadow-lg md:p-10"
                    >
                      <h2 className="font-headline text-2xl font-black text-on-background md:text-3xl">
                        When would you like us to come?
                      </h2>

                      {/* Calendar */}
                      <DatePicker value={formData.date} onChange={handleDateSelect} />

                      {/* Time slots */}
                      {formData.date && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-8 overflow-hidden"
                        >
                          <h3 className="mb-4 font-headline text-lg font-black text-on-background">
                            Choose a time slot
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {[
                              {
                                id: "morning",
                                label: "Morning",
                                time: "9:00 AM – 12:00 PM",
                                icon: Sun,
                                availability: "4 slots available",
                              },
                              {
                                id: "afternoon",
                                label: "Afternoon",
                                time: "12:00 PM – 4:00 PM",
                                icon: Cloud,
                                availability: "Almost full",
                              },
                              {
                                id: "evening",
                                label: "Evening",
                                time: "4:00 PM – 7:00 PM",
                                icon: Sunset,
                                availability: "3 slots available",
                              },
                            ].map((slot: any) => {
                              const SlotIcon = slot.icon;
                              const isSelected = formData.timeSlot === slot.id;
                              return (
                                <motion.button
                                  key={slot.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      timeSlot: slot.id,
                                    }))
                                  }
                                  className={`rounded-2xl border-2 p-4 text-center transition ${
                                    isSelected
                                      ? "border-secondary-container bg-primary-container/10"
                                      : "border-primary-container/20 bg-surface-container-lowest hover:border-primary-container/40"
                                  }`}
                                >
                                  <SlotIcon className="mx-auto h-6 w-6 text-primary" />
                                  <p className="mt-2 font-headline text-sm font-black text-on-background">
                                    {slot.label}
                                  </p>
                                  <p className="mt-1 text-xs font-bold text-on-surface-variant">
                                    {slot.time}
                                  </p>
                                  <p className="mt-2 text-[10px] font-bold text-on-surface-variant">
                                    {slot.availability}
                                  </p>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Location section */}
                      {formData.timeSlot && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-8 overflow-hidden space-y-4"
                        >
                          <div>
                            <h3 className="mb-3 font-headline text-lg font-black text-on-background">
                              Where in Karachi?
                            </h3>
                            <select
                              name="area"
                              value={formData.area}
                              onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value) {
                                  window.setTimeout(() => addressRef.current?.focus(), 80);
                                }
                              }}
                              className="w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest px-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="">Select an area</option>
                              {Object.entries(karachiAreas).map(([region, areas]) => (
                                <optgroup key={region} label={region}>
                                  {areas.map((area) => (
                                    <option key={area} value={area}>
                                      {area}
                                    </option>
                                  ))}
                                </optgroup>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                              Full Address
                            </label>
                            <input
                              ref={addressRef}
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              placeholder="House/Flat number, Street, Block"
                              className="mt-2 w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest px-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                              Special Instructions (optional)
                            </label>
                            <textarea
                              name="instructions"
                              value={formData.instructions}
                              onChange={handleInputChange}
                              placeholder="e.g. 3rd floor, ring bell twice, dog in the house"
                              rows={3}
                              className="mt-2 w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest px-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2 footer */}
                      <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-between">
                        <button
                          onClick={() => setStep(1)}
                          className="rounded-2xl border-2 border-primary bg-transparent px-6 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-primary transition hover:bg-primary/5"
                        >
                          ← Back
                        </button>
                        <motion.button
                          whileHover={isStep2Complete ? { scale: 1.02 } : {}}
                          whileTap={isStep2Complete ? { scale: 0.98 } : {}}
                          onClick={handleContinue}
                          disabled={!isStep2Complete}
                          className={`rounded-2xl px-6 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] transition ${
                            isStep2Complete
                              ? "bg-secondary-container text-on-secondary-container hover:brightness-95"
                              : "cursor-not-allowed bg-surface-container/50 text-on-surface-variant/50"
                          }`}
                        >
                          Continue to Details →
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* STEP 3 */}
                <AnimatePresence mode="wait">
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-8 shadow-lg md:p-10"
                    >
                      <h2 className="font-headline text-2xl font-black text-on-background md:text-3xl">
                        Almost done — just a few details
                      </h2>
                      <p className="mt-2 text-sm text-on-surface-variant">
                        We'll use these to confirm your booking and send updates.
                      </p>

                      <div className="mt-6 space-y-4">
                        {/* Full name */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                            Your Name
                          </label>
                          <input
                            ref={nameRef}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={(e) => {
                              const error = validateField("name", e.target.value);
                              if (error) {
                                setErrors((prev) => ({ ...prev, name: error }));
                              } else {
                                window.setTimeout(() => phoneRef.current?.focus(), 70);
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                phoneRef.current?.focus();
                              }
                            }}
                            placeholder="e.g. Ahmed Khan"
                            className={`mt-2 w-full rounded-2xl border-2 px-4 py-3 font-body text-sm text-on-background outline-none transition ${
                              errors.name
                                ? "border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                                : "border-primary-container/20 bg-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20"
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-600 font-bold">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Flag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                            <input
                              ref={phoneRef}
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              onBlur={(e) => {
                                const error = validateField("phone", e.target.value);
                                if (error) {
                                  setErrors((prev) => ({ ...prev, phone: error }));
                                } else {
                                  window.setTimeout(() => whatsappRef.current?.focus(), 70);
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  whatsappRef.current?.focus();
                                }
                              }}
                              placeholder="+92 300 0000000"
                              className={`mt-2 w-full rounded-2xl border-2 pl-10 pr-4 py-3 font-body text-sm text-on-background outline-none transition ${
                                errors.phone
                                  ? "border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                                  : "border-primary-container/20 bg-surface-container-highest focus:border-primary focus:ring-2 focus:ring-primary/20"
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-600 font-bold">
                              {errors.phone}
                            </p>
                          )}
                          <p className="mt-1 text-[10px] text-on-surface-variant">
                            We'll call this number to confirm
                          </p>
                        </div>

                        {/* WhatsApp */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                            WhatsApp Number
                          </label>
                          <div className="relative">
                            <MessageCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                            <input
                              ref={whatsappRef}
                              type="tel"
                              name="whatsapp"
                              value={formData.whatsapp}
                              onChange={handleInputChange}
                              onBlur={() => {
                                window.setTimeout(() => emailRef.current?.focus(), 70);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  emailRef.current?.focus();
                                }
                              }}
                              placeholder="+92 300 0000000"
                              disabled={formData.whatsapp === formData.phone && formData.phone}
                              className="mt-2 w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest pl-10 pr-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                            />
                          </div>
                          <label className="mt-2 flex items-center gap-2">
                            <input
                              type="checkbox"
                              onChange={(e) => handleWhatsAppSame(e.target.checked)}
                              className="h-4 w-4 rounded border-primary accent-primary"
                            />
                            <span className="text-xs text-on-surface-variant">
                              Same as phone number
                            </span>
                          </label>
                        </div>

                        {/* Email (optional) */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                            Email (optional)
                          </label>
                          <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                sourceRef.current?.focus();
                              }
                            }}
                            placeholder="for booking confirmation receipt"
                            className="mt-2 w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest px-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        {/* How did you hear */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                            How did you hear about us?
                          </label>
                          <select
                            ref={sourceRef}
                            name="source"
                            value={formData.source}
                            onChange={(e) => {
                              handleInputChange(e);
                              window.setTimeout(() => consentRef.current?.focus(), 80);
                            }}
                            className="mt-2 w-full rounded-2xl border-2 border-primary-container/20 bg-surface-container-highest px-4 py-3 font-body text-sm text-on-background outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select an option</option>
                            <option value="google">Google</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="friend">Friend or Family</option>
                            <option value="walked">Walked past our office</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Consent */}
                        <div className={`rounded-2xl border-2 p-4 ${
                          errors.consent
                            ? "border-red-500 bg-red-50/30"
                            : "border-primary-container/20 bg-surface-container-highest"
                        }`}>
                          <label className="flex items-start gap-3">
                            <input
                              ref={consentRef}
                              type="checkbox"
                              name="consent"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 rounded border-primary accent-primary flex-shrink-0"
                            />
                            <span className="text-xs text-on-background leading-relaxed">
                              I agree to be contacted by Emerald Pulse to confirm this booking. I understand the price is an estimate and final pricing will be confirmed before work begins.
                            </span>
                          </label>
                          {errors.consent && (
                            <p className="mt-2 text-xs text-red-600 font-bold">
                              {errors.consent}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Step 3 footer */}
                      <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-between">
                        <button
                          onClick={() => setStep(2)}
                          className="rounded-2xl border-2 border-primary bg-transparent px-6 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] text-primary transition hover:bg-primary/5"
                        >
                          ← Back
                        </button>
                        <motion.button
                          whileHover={isStep3Complete ? { scale: 1.02 } : {}}
                          whileTap={isStep3Complete ? { scale: 0.98 } : {}}
                          onClick={handleContinue}
                          disabled={!isStep3Complete}
                          className={`rounded-2xl px-8 py-3.5 text-center font-headline text-sm font-black uppercase tracking-[0.08em] transition ${
                            isStep3Complete
                              ? "bg-secondary-container text-on-secondary-container hover:brightness-95"
                              : "cursor-not-allowed bg-surface-container/50 text-on-surface-variant/50"
                          }`}
                        >
                          Confirm Booking
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar - desktop only */}
              <div className="hidden space-y-5 lg:block">
                {/* Booking summary */}
                <div className="sticky top-[168px] space-y-5">
                  <div className="rounded-3xl border-2 border-primary-container bg-gradient-to-br from-[#0a5c3e] to-[#063d2c] p-6 text-white shadow-lg">
                    <h3 className="font-headline text-lg font-black">Your Booking Summary</h3>
                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <p className="text-xs text-white/60">Service</p>
                        <p className="mt-1 font-bold text-white/90">
                          {currentService?.name || "Not selected yet"}
                        </p>
                      </div>
                      {formData.variant && (
                        <div>
                          <p className="text-xs text-white/60">Type</p>
                          <p className="mt-1 font-bold text-white/90">
                            {currentVariant?.name}
                          </p>
                        </div>
                      )}
                      {estimatedPrice && (
                        <div className="rounded-2xl border border-primary-container/30 bg-white/10 p-3">
                          <p className="text-xs text-white/60">Estimated Price</p>
                          <p className="mt-1 font-headline text-lg font-black text-primary-container">
                            PKR {estimatedPrice.min.toLocaleString()}
                          </p>
                        </div>
                      )}
                      {formData.date && (
                        <div>
                          <p className="text-xs text-white/60">Date & Time</p>
                          <p className="mt-1 font-bold text-white/90">
                            {formData.date.toLocaleDateString()}
                            {formData.timeSlot &&
                              ` • ${
                                formData.timeSlot === "morning"
                                  ? "9am–12pm"
                                  : formData.timeSlot === "afternoon"
                                  ? "12pm–4pm"
                                  : "4pm–7pm"
                              }`}
                          </p>
                        </div>
                      )}
                      {formData.area && (
                        <div>
                          <p className="text-xs text-white/60">Area</p>
                          <p className="mt-1 font-bold text-white/90">
                            {formData.area}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Need help */}
                  <div className="rounded-3xl border-2 border-primary-container bg-surface-container-lowest p-6 shadow-lg">
                    <h3 className="font-headline text-lg font-black text-on-background">
                      Have questions?
                    </h3>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      Before booking, chat with our team
                    </p>
                    <div className="mt-4 space-y-2">
                      <button className="w-full rounded-xl border-2 border-primary bg-transparent px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-primary transition hover:bg-primary/5">
                        Chat on WhatsApp
                      </button>
                      <button className="w-full rounded-xl bg-primary px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-on-primary transition hover:brightness-110">
                        Call Now
                      </button>
                    </div>
                  </div>

                  {/* Our promise */}
                  <div className="rounded-3xl border-2 border-primary-container bg-primary-container/20 p-6 shadow-lg">
                    <h3 className="font-headline text-lg font-black text-on-background">
                      Our Promise
                    </h3>
                    <div className="mt-4 space-y-2">
                      {[
                        "No payment until job done",
                        "Free cancellation anytime",
                        "Verified technicians only",
                      ].map((promise, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                          <p className="text-xs font-semibold text-on-background">
                            {promise}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <PulseAssistant />
    </div>
  );
}

// DatePicker component
function DatePicker({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (date: Date) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0; // Disable past dates and Sundays
  };

  const days = [];
  const firstDay = getFirstDayOfMonth(currentMonth);
  const daysInMonth = getDaysInMonth(currentMonth);

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-headline text-lg font-black text-on-background">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
              )
            }
            className="rounded-lg border-2 border-primary-container/20 bg-surface-container-highest p-2 transition hover:border-primary-container"
          >
            <ChevronLeft className="h-4 w-4 text-on-background" />
          </button>
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
              )
            }
            className="rounded-lg border-2 border-primary-container/20 bg-surface-container-highest p-2 transition hover:border-primary-container"
          >
            <ChevronRight className="h-4 w-4 text-on-background" />
          </button>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <p
            key={day}
            className="text-xs font-bold uppercase text-on-surface-variant"
          >
            {day}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, idx) => {
          if (!date) {
            return <div key={`empty-${idx}`} />;
          }

          const disabled = isDisabled(date);
          const selected =
            value &&
            date.getDate() === value.getDate() &&
            date.getMonth() === value.getMonth() &&
            date.getFullYear() === value.getFullYear();
          const today = isToday(date);

          return (
            <motion.button
              key={date.toISOString()}
              whileHover={!disabled ? { scale: 1.1 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              onClick={() => !disabled && onChange(date)}
              className={`rounded-lg py-2.5 text-sm font-bold transition ${
                selected
                  ? "bg-primary text-on-primary"
                  : today
                  ? "border-2 border-primary bg-primary-container/20"
                  : disabled
                  ? "cursor-not-allowed text-on-surface-variant/30 line-through"
                  : "border-2 border-transparent bg-surface-container-highest text-on-background hover:border-primary-container"
              }`}
              disabled={disabled}
            >
              {date.getDate()}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
