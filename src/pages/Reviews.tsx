import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const reviews = [
  { text: "A&F Ventures completely transformed our restaurant's online presence. Our reservations doubled within weeks.", name: "Ahmed K.", role: "Restaurant Owner" },
  { text: "The team built a professional website and booking system that made our operations far more organized.", name: "Fatima R.", role: "Cafe Owner" },
  { text: "Very professional and modern solutions. Their automation tools saved us hours every week.", name: "Daniel M.", role: "Business Owner" },
  { text: "Our customers can now order and reserve tables online. It made a big difference.", name: "Hassan A.", role: "Restaurant Manager" },
  { text: "A&F Ventures helped us understand how digital systems can grow a business.", name: "Sarah W.", role: "Small Business Owner" },
];

export default function Reviews() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <h1 className="heading-xl mb-6">Client Reviews</h1>
          <p className="body-lg max-w-xl mb-16">
            What our clients say about working with us.
          </p>

          <div className="space-y-0 border-t">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-3 gap-4 py-8 border-b"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-display font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
                <p className="md:col-span-2 text-foreground leading-relaxed">
                  "{r.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
