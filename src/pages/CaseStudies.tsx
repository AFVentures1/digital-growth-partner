import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, TrendingUp } from "lucide-react";
import clientQaffee from "@/assets/client-qaffee.png";
import clientDashboard from "@/assets/client-dashboard.png";

const cases = [
  {
    name: "Qaffee Point Restaurant",
    image: clientQaffee,
    problem: "No website and customers relied only on walk-ins. Zero online presence meant missed revenue opportunities.",
    solution: "Built an SEO-optimized website with a table booking system, online menu, and WhatsApp integration for instant customer engagement.",
    result: "Improved visibility and customer engagement. Online reservations now account for a significant portion of bookings.",
    tags: ["Website", "Booking System", "SEO"],
  },
  {
    name: "Almas Electronics",
    image: clientDashboard,
    problem: "Old catalog website with no customer engagement. Repair tracking was done manually with paper records.",
    solution: "Created a modern ecommerce system with integrated CRM for repair tracking, customer communication, and inventory management.",
    result: "Improved sales and customer management. Repair turnaround time decreased and customer satisfaction increased.",
    tags: ["E-commerce", "CRM", "Automation"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function CaseStudies() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="max-w-2xl mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Case Studies</p>
            <h1 className="heading-xl mb-6">Real Results for Real Businesses</h1>
            <p className="body-lg">
              See how we've helped businesses transform their operations and grow revenue.
            </p>
          </motion.div>

          <div className="space-y-12">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                {...fadeUp}
                transition={{ delay: i * 0.15 }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.tags.map((tag, j) => (
                        <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display font-bold text-2xl text-foreground mb-6">{c.name}</h2>
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">The Problem</p>
                        <p className="text-sm text-foreground/80">{c.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Our Solution</p>
                        <p className="text-sm text-foreground/80">{c.solution}</p>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1 flex items-center gap-1">
                          <TrendingUp size={12} /> Result
                        </p>
                        <p className="text-sm font-medium text-foreground">{c.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16 text-center" {...fadeUp}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
