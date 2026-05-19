import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Star, ArrowRight, Quote } from "lucide-react";

const reviews = [
  { text: "A&F Ventures helped us build our first website and booking system. Customers can now reserve tables easily.", name: "Ahmed K.", role: "Restaurant Owner" },
  { text: "The automation tools they implemented saved our team hours every week.", name: "Fatima R.", role: "Cafe Owner" },
  { text: "They helped us modernize our business digitally and attract more customers.", name: "Daniel M.", role: "Restaurant Manager" },
  { text: "Our customers can now order and reserve tables online. It made a big difference.", name: "Hassan A.", role: "Restaurant Manager" },
  { text: "A&F Ventures helped us understand how digital systems can grow a business.", name: "Sarah W.", role: "Small Business Owner" },
  { text: "Professional, fast, and genuinely invested in our success. Highly recommend.", name: "Mariam L.", role: "Boutique Owner" },
];

function ReviewCard({ r }: { r: typeof reviews[number] }) {
  return (
    <div className="glass-card gold-card-accent p-8 w-[340px] md:w-[400px] shrink-0 hover:border-[hsl(var(--gold)/0.6)] hover:shadow-[0_0_40px_-10px_hsl(var(--gold)/0.5)] transition-all">
      <Quote size={32} className="text-[hsl(var(--gold))] mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} size={16} className="fill-[hsl(var(--gold))] text-[hsl(var(--gold))] drop-shadow-[0_0_4px_hsl(var(--gold)/0.6)]" />
        ))}
      </div>
      <p className="text-foreground/90 leading-relaxed mb-6 text-justify">"{r.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-[hsl(var(--gold)/0.15)]">
        <div className="w-10 h-10 rounded-full bg-[hsl(var(--gold)/0.15)] border border-[hsl(var(--gold)/0.4)] flex items-center justify-center">
          <span className="text-[hsl(var(--gold))] font-bold text-sm">{r.name[0]}</span>
        </div>
        <div>
          <p className="font-bold text-sm text-white">{r.name}</p>
          <p className="text-xs text-[hsl(var(--gold))]">{r.role}</p>
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Reviews() {
  const loop = [...reviews, ...reviews];
  const loop2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-50" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] hero-orb royal" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] hero-orb gold" />

        <div className="container-grid relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center mb-20" {...fadeUp}>
            <p className="text-sm font-semibold text-[hsl(var(--gold))] uppercase tracking-widest mb-3">Testimonials</p>
            <h1 className="heading-xl mb-6 gold-underline">What Our Clients Say</h1>
            <p className="body-lg">
              Don't just take our word for it — hear from the businesses we've helped transform.
            </p>
          </motion.div>
        </div>

        <div className="marquee py-4">
          <div className="marquee-track">
            {loop.map((r, i) => (
              <ReviewCard key={`a-${i}`} r={r} />
            ))}
          </div>
        </div>

        <div className="marquee py-4 mt-6" style={{ animationDirection: "reverse" }}>
          <div className="marquee-track" style={{ animationDirection: "reverse" }}>
            {loop2.map((r, i) => (
              <ReviewCard key={`b-${i}`} r={r} />
            ))}
          </div>
        </div>

        <div className="container-grid">
          <motion.div className="mt-20 text-center" {...fadeUp}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Join Our Clients
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
