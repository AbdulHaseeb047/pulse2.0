export default function Marquee() {
  const items = [
    "Open Box Delivery",
    "Free Installation",
    "Verified Technicians",
    "Karachi-Wide",
    "Same Day Booking"
  ];

  return (
    <div className="bg-surface-container-low py-6 md:py-8 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-headline font-black text-2xl md:text-4xl opacity-90 uppercase tracking-[0.06em] md:tracking-[0.08em] marquee-outline mx-6 md:mx-8 leading-[1.25]">
              {item}
            </span>
            <span className="text-primary font-headline font-black text-2xl md:text-4xl opacity-50 px-3 md:px-4 marquee-outline-dot">·</span>
          </span>
        ))}
        {/* Duplicate for seamless scroll */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="inline-flex items-center">
            <span className="font-headline font-black text-2xl md:text-4xl opacity-90 uppercase tracking-[0.06em] md:tracking-[0.08em] marquee-outline mx-6 md:mx-8 leading-[1.25]">
              {item}
            </span>
            <span className="text-primary font-headline font-black text-2xl md:text-4xl opacity-50 px-3 md:px-4 marquee-outline-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
