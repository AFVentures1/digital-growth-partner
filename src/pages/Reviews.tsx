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
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Reviews() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="max-w-2xl mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</p>
            <h1 className="heading-xl mb-6">Client Reviews</h1>
            <p className="body-lg">
              Don't just take our word for it — hear from the businesses we've helped transform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Quote size={28} className="text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8 flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16 text-center" {...fadeUp}>
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
