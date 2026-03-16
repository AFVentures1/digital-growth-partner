import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What does A&F Ventures do?",
        a: "We help restaurants and small businesses (MSMEs) modernize their operations through AI-powered digital solutions — including websites, booking systems, CRM platforms, AI chatbots, and automation workflows.",
      },
      {
        q: "Who are your typical clients?",
        a: "Our clients range from restaurants and cafes to retail stores, clinics, and other small-to-medium enterprises across Kenya and East Africa who want to grow their business using technology.",
      },
      {
        q: "Do you only work with restaurants?",
        a: "No! While restaurants are a core focus, we work with any MSME looking to digitize — including retail shops, service businesses, healthcare clinics, and more.",
      },
    ],
  },
  {
    category: "Services & Process",
    items: [
      {
        q: "How long does it take to build a website?",
        a: "Most websites are delivered within 2–4 weeks depending on complexity. Simple landing pages can be ready in as little as 5 business days.",
      },
      {
        q: "What's included in a free business audit?",
        a: "We analyze your current digital presence, identify gaps, and provide a tailored recommendation for how technology can increase your revenue and efficiency — completely free of charge.",
      },
      {
        q: "Do you offer ongoing support after launch?",
        a: "Yes! All our plans include post-launch support. We also offer maintenance packages to keep your systems updated, secure, and optimized.",
      },
      {
        q: "Can you integrate with my existing systems?",
        a: "Absolutely. We specialize in integrating with POS systems, payment gateways (M-Pesa, card payments), social media, and other existing tools your business already uses.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How much do your services cost?",
        a: "Our pricing varies based on the scope of work. We offer flexible packages starting from affordable entry-level plans. Visit our Pricing page or contact us for a custom quote.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we offer flexible payment plans to make our services accessible to businesses of all sizes. We can discuss installment options during your consultation.",
      },
      {
        q: "Is there a contract or lock-in period?",
        a: "We don't believe in locking clients in. Our service agreements are transparent and flexible, with clear terms you'll understand before signing.",
      },
    ],
  },
  {
    category: "Technology",
    items: [
      {
        q: "What technologies do you use?",
        a: "We use modern, industry-leading technologies including React, AI/ML platforms, cloud hosting, and integration APIs. Everything is built for speed, security, and scalability.",
      },
      {
        q: "Will I be able to manage my website myself?",
        a: "Yes! We build user-friendly dashboards and provide training so you can update content, manage orders, and track analytics independently.",
      },
      {
        q: "How do the AI chatbots work?",
        a: "Our AI chatbots are trained on your business information and can handle customer inquiries, take orders, and provide support 24/7 via WhatsApp or your website.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Everything you need to know about working with A&F Ventures.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((section, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="heading-md mb-6 text-foreground">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, j) => (
                    <AccordionItem
                      key={j}
                      value={`${i}-${j}`}
                      className="glass-card px-6 border-border/50"
                    >
                      <AccordionTrigger className="text-foreground text-left font-semibold text-sm hover:text-primary transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-20" {...fadeUp}>
            <p className="body-lg mb-6">Still have questions?</p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
