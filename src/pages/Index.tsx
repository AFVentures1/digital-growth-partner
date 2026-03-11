import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  Globe, CalendarCheck, Bot, Users, Workflow, BarChart3,
  ArrowRight, Star, CheckCircle2
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import clientQaffee from "@/assets/client-qaffee.png";
import clientDashboard from "@/assets/client-dashboard.png";
import clientNtv from "@/assets/client-ntv.png";
import clientAlmas from "@/assets/client-almas.png";
import restaurantShowcase from "@/assets/restaurant-showcase.jpg";
import businessOwner from "@/assets/business-owner.jpg";

const services = [
  { title: "Website Development", desc: "Modern websites optimized for SEO and customer conversion.", icon: Globe },
  { title: "Online Ordering & Booking", desc: "Allow customers to order and reserve tables easily.", icon: CalendarCheck },
  { title: "AI Chatbots", desc: "Automated WhatsApp and website chatbots to answer customers 24/7.", icon: Bot },
  { title: "CRM Systems", desc: "Track customers, reservations and repeat visitors.", icon: Users },
  { title: "Automation Workflows", desc: "Automate bookings, invoices, and follow-ups.", icon: Workflow },
  { title: "Analytics Dashboards", desc: "Track revenue, bookings and customer trends.", icon: BarChart3 },
];

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "3x", label: "Average Revenue Growth" },
  { value: "24/7", label: "AI Support Active" },
  { value: "98%", label: "Client Satisfaction" },
];

const reviews = [
  { text: "A&F Ventures helped us build our first website and booking system. Customers can now reserve tables easily.", name: "Ahmed K.", role: "Restaurant Owner" },
  { text: "The automation tools they implemented saved our team hours every week.", name: "Fatima R.", role: "Cafe Owner" },
  { text: "They helped us modernize our business digitally and attract more customers.", name: "Daniel M.", role: "Restaurant Manager" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Index() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </motion.div>
        <motion.div className="container-grid relative z-10 py-24 md:py-32" style={{ opacity: heroOpacity, y: textY }}>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Digital Consulting
            </motion.div>
            <motion.h1
              className="heading-xl mb-6 text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              AI-Powered Digital Systems for{" "}
              <span className="gradient-text">Restaurants & MSMEs</span>
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              A&F Ventures helps restaurants and small businesses modernize their operations, attract more customers, and increase revenue through websites, automation, and AI tools.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Business Audit
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container-grid py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="text-center" variants={staggerItem}>
                <p className="text-3xl md:text-4xl font-extrabold font-display gradient-text mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="heading-lg">Digital Solutions That Drive Growth</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 group hover:border-primary/30 hover:glow-border transition-all duration-500"
                  variants={staggerItem}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CLIENT SHOWCASE */}
      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="heading-lg">Businesses We Help</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { img: clientQaffee, title: "Qaffee Point Restaurant", desc: "Website, booking system & online ordering platform" },
              { img: clientDashboard, title: "Restaurant Management Dashboard", desc: "Revenue analytics, order tracking & AI chatbot assistant" },
              { img: restaurantShowcase, title: "Modern Restaurant Solutions", desc: "End-to-end digital infrastructure for food businesses" },
              { img: businessOwner, title: "MSME Digital Transformation", desc: "Helping small businesses modernize with smart technology" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden group cursor-pointer"
                variants={staggerItem}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="heading-lg">What Our Clients Say</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((r, i) => (
              <motion.div key={i} className="glass-card p-8" variants={staggerItem}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{r.text}"</p>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <motion.div
            className="glass-card p-12 md:p-20 text-center glow-border"
            {...fadeUp}
          >
            <h2 className="heading-lg mb-4">Ready to Modernize Your Business?</h2>
            <p className="body-lg max-w-lg mx-auto mb-10">
              Get a free business audit and discover how AI-powered digital systems can help you grow.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get a Free Business Audit
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
