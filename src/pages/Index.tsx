import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  WireframeViz,
  BookingViz,
  ChatbotViz,
  CRMViz,
  AutomationViz,
  AnalyticsViz,
} from "@/components/ServiceVisualizations";

const services = [
  { title: "Website Development", desc: "Modern websites optimized for SEO and customer conversion.", viz: WireframeViz },
  { title: "Online Ordering & Booking", desc: "Allow customers to order and reserve tables easily.", viz: BookingViz },
  { title: "AI Chatbots", desc: "Automated WhatsApp and website chatbots to answer customers 24/7.", viz: ChatbotViz },
  { title: "CRM Systems", desc: "Track customers, reservations and repeat visitors.", viz: CRMViz },
  { title: "Automation Systems", desc: "Automate bookings, invoices, and follow-ups.", viz: AutomationViz },
  { title: "Analytics Dashboards", desc: "Track revenue, bookings and customer trends.", viz: AnalyticsViz },
];

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const ActiveViz = services[activeService].viz;

  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="max-w-3xl">
            <motion.h1
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Digital Systems That Help Restaurants Grow
            </motion.h1>
            <motion.p
              className="body-lg max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              A&F Ventures helps restaurants and small businesses increase customers, automate operations, and grow revenue using AI-powered digital tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - Interactive Module */}
      <section className="section-padding border-t">
        <div className="container-grid">
          <h2 className="heading-lg mb-16">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Service list */}
            <div className="space-y-0 border-t border-border">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`w-full text-left px-0 py-5 border-b border-border transition-colors duration-200 group ${
                    activeService === i ? "" : ""
                  }`}
                >
                  <p
                    className={`font-display font-bold text-lg uppercase tracking-tight transition-colors ${
                      activeService === i ? "text-primary" : "text-foreground group-hover:text-primary/60"
                    }`}
                  >
                    {s.title}
                  </p>
                  {activeService === i && (
                    <motion.p
                      className="body-md mt-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            {/* Right: Visualization */}
            <div className="hidden md:flex items-center justify-center min-h-[400px] bg-card rounded-sm ml-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveViz />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t">
        <div className="container-grid text-center">
          <h2 className="heading-lg mb-6">Ready to Modernize Your Business?</h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Get a free consultation and discover how digital systems can help you grow.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
