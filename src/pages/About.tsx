import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl mb-8">About A&F Ventures</h1>
              <div className="space-y-6">
                <p className="body-lg">
                  A&F Ventures helps small and medium businesses modernize using digital systems and AI automation.
                </p>
                <p className="body-md">
                  We specialize in helping restaurants and MSMEs increase customers, streamline operations, and grow revenue through smart technology.
                </p>
                <p className="body-md">
                  Our mission is to make advanced digital infrastructure accessible to small businesses.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-sm p-8 md:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Focus
                  </p>
                  <p className="font-display font-bold text-lg">Restaurants & MSMEs</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="font-display font-bold text-lg">Kenya & Emerging Markets</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Expertise
                  </p>
                  <p className="font-display font-bold text-lg">AI, Automation & Digital Systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
