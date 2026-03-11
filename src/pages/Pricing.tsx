import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const packages = [
  {
    name: "Foundation",
    features: [
      "Website development",
      "Google Business profile setup",
      "Basic SEO",
      "WhatsApp integration",
    ],
  },
  {
    name: "Growth",
    featured: true,
    features: [
      "Everything in Foundation",
      "Booking / reservation system",
      "CRM system",
      "Email marketing automation",
    ],
  },
  {
    name: "Scale",
    features: [
      "Everything in Growth",
      "AI chatbot assistant",
      "Analytics dashboard",
      "Business automation systems",
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <h1 className="heading-xl mb-6">Pricing</h1>
          <p className="body-lg max-w-xl mb-16">
            Packages designed to grow with your business.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 ${
                  pkg.featured ? "bg-foreground text-background" : "bg-background"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-8">
                  {pkg.name}
                </h3>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((f, j) => (
                    <li
                      key={j}
                      className={`text-sm ${
                        pkg.featured ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured ? "outline" : "cta"}
                  size="default"
                  className={pkg.featured ? "border-background/30 text-background hover:bg-background hover:text-foreground" : ""}
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
