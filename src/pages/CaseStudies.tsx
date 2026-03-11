import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const cases = [
  {
    name: "Qaffee Point Restaurant",
    problem: "No website and customers relied only on walk-ins.",
    solution: "Built an SEO optimized website with table booking system.",
    result: "Improved visibility and customer engagement.",
  },
  {
    name: "Almas Electronics",
    problem: "Old catalog website with no customer engagement.",
    solution: "Created ecommerce system and CRM for repair tracking.",
    result: "Improved sales and customer management.",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <h1 className="heading-xl mb-6">Case Studies</h1>
          <p className="body-lg max-w-xl mb-16">
            Real results for real businesses.
          </p>

          <div className="space-y-24">
            {cases.map((c, i) => (
              <motion.article
                key={i}
                className="grid md:grid-cols-3 gap-8 md:gap-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Sticky stats column */}
                <div className="md:sticky md:top-24 md:self-start space-y-6">
                  <h2 className="font-display font-bold text-2xl uppercase tracking-tight">
                    {c.name}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-foreground">{c.problem}</p>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-foreground">{c.solution}</p>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-1">
                        Result
                      </p>
                      <p className="text-sm font-semibold text-foreground">{c.result}</p>
                    </div>
                  </div>
                </div>

                {/* Right content area */}
                <div className="md:col-span-2">
                  <div className="bg-card rounded-sm p-8 md:p-12 min-h-[240px] flex items-center justify-center">
                    <p className="body-md text-center max-w-md">
                      {c.solution} — resulting in {c.result.toLowerCase()}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
