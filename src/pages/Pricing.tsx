import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Foundation",
    desc: "Get your business online with the essentials.",
    features: [
      "Website development",
      "Google Business setup",
      "Basic SEO",
      "WhatsApp integration",
    ],
  },
  {
    name: "Growth",
    featured: true,
    desc: "Scale your operations with smart systems.",
    features: [
      "Everything in Foundation",
      "Booking / reservation system",
      "CRM system",
      "Email marketing automation",
    ],
  },
  {
    name: "Scale",
    desc: "Full digital transformation with AI.",
    features: [
      "Everything in Growth",
      "AI chatbot assistant",
      "Analytics dashboard",
      "Business automation",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Pricing() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="heading-xl mb-6">Packages That Grow With You</h1>
            <p className="body-lg">
              Choose the package that fits your business needs. All packages include dedicated support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`glass-card p-8 md:p-10 relative flex flex-col ${
                  pkg.featured ? "border-primary/40 glow-border" : ""
                }`}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-8">{pkg.desc}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
