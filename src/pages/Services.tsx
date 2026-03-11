import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  { title: "Website Development", desc: "Modern websites optimized for SEO and customer conversion. We build fast, responsive sites that turn visitors into customers." },
  { title: "Online Ordering & Booking Systems", desc: "Allow customers to order food and reserve tables easily through integrated digital platforms." },
  { title: "AI Chatbots", desc: "Automated WhatsApp and website chatbots to answer customers 24/7, handle FAQs, and take orders." },
  { title: "CRM Systems", desc: "Track customers, reservations and repeat visitors. Build lasting relationships with organized customer data." },
  { title: "Automation Systems", desc: "Automate bookings, invoices, follow-ups, and repetitive tasks to save time and reduce errors." },
  { title: "Analytics Dashboards", desc: "Track revenue, bookings and customer trends with clear, actionable dashboards." },
];

export default function Services() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="body-lg max-w-xl mb-16">
            End-to-end digital systems designed for restaurants and small businesses.
          </p>

          <div className="space-y-0 border-t">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-3 gap-4 py-8 border-b"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="font-display font-bold text-lg uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="md:col-span-2 body-md">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
