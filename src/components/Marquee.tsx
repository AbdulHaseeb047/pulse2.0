export default function Marquee() {
  const items = [
    "Open Box Delivery",
    "Free Installation",
    "Verified Technicians",
    "Karachi-Wide",
    "Same Day Booking"
  ];

  return (
    <div className="bg-surface-container-low py-16 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-on-surface font-headline font-black text-3xl md:text-5xl opacity-20 px-8 uppercase tracking-tighter">
              {item}
            </span>
            <span className="text-primary font-headline font-black text-3xl md:text-5xl opacity-40 px-4">·</span>
          </span>
        ))}
        {/* Duplicate for seamless scroll */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="inline-flex items-center">
            <span className="text-on-surface font-headline font-black text-3xl md:text-5xl opacity-20 px-8 uppercase tracking-tighter">
              {item}
            </span>
            <span className="text-primary font-headline font-black text-3xl md:text-5xl opacity-40 px-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
