import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Globe, CalendarCheck, Bot, Users, Workflow, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Modern websites optimized for SEO and customer conversion. We build fast, responsive sites that turn visitors into customers.",
    icon: Globe,
    features: ["Custom responsive design", "SEO optimization", "Mobile-first approach", "Fast loading speeds"],
  },
  {
    title: "Online Ordering & Booking Systems",
    desc: "Allow customers to order food and reserve tables easily through integrated digital platforms.",
    icon: CalendarCheck,
    features: ["Table reservations", "Online food ordering", "Payment integration", "Real-time availability"],
  },
  {
    title: "AI Chatbots",
    desc: "Automated WhatsApp and website chatbots to answer customers 24/7, handle FAQs, and take orders.",
    icon: Bot,
    features: ["WhatsApp integration", "24/7 automated support", "Order taking", "FAQ handling"],
  },
  {
    title: "CRM Systems",
    desc: "Track customers, reservations and repeat visitors. Build lasting relationships with organized customer data.",
    icon: Users,
    features: ["Customer tracking", "Visit history", "Loyalty programs", "Communication tools"],
  },
  {
    title: "Automation Workflows",
    desc: "Automate bookings, invoices, follow-ups, and repetitive tasks to save time and reduce errors.",
    icon: Workflow,
    features: ["Booking automation", "Invoice generation", "Follow-up sequences", "Task scheduling"],
  },
  {
    title: "Analytics Dashboards",
    desc: "Track revenue, bookings and customer trends with clear, actionable dashboards.",
    icon: BarChart3,
    features: ["Revenue tracking", "Booking analytics", "Customer insights", "Trend reports"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Services() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="max-w-2xl mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="heading-xl mb-6">End-to-End Digital Solutions</h1>
            <p className="body-lg">
              Everything your business needs to go digital — from websites to AI automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 md:p-10 group hover:border-primary/30 transition-all duration-500"
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl mb-3 text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                      <ul className="space-y-2">
                        {s.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={14} className="text-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="mt-16 text-center" {...fadeUp}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
