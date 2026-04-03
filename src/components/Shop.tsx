import { motion } from "motion/react";
import { ShoppingCart, ArrowRight } from "lucide-react";

const products = [
  { 
    name: "CrystalCool Inverter 1.5 Ton", 
    price: "PKR 145,000", 
    img: "https://picsum.photos/seed/ac-unit/600/400",
    tags: ["Free Install Included", "Open Box Verified"]
  },
  { 
    name: "SolarPulse Panel Array (550W)", 
    price: "PKR 42,500", 
    img: "https://picsum.photos/seed/solar-panel/600/400",
    tags: ["Free Install Included"]
  },
  { 
    name: "GuardEye 4K Security Hub", 
    price: "PKR 28,900", 
    img: "https://picsum.photos/seed/security-cam/600/400",
    tags: ["Free Install Included"]
  },
];

export default function Shop() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-5xl font-extrabold mb-4 tracking-tighter">Shop & Get It Installed</h2>
            <p className="text-on-surface-variant text-xl font-medium">Curated electronics with guaranteed professional setup.</p>
          </div>
          <button className="text-primary font-black text-lg flex items-center gap-3 hover:translate-x-2 transition-transform uppercase tracking-widest">
            Explore Full Shop <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-xl p-6 group shadow-lg"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={product.img} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-secondary-container text-on-secondary-container text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="font-bold text-xl mb-3">{product.name}</h4>
              <div className="flex justify-between items-center">
                <p className="text-primary font-black text-2xl">{product.price}</p>
                <button className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/30">
                  <ShoppingCart className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
