import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, Lightbulb, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Mission", desc: "Make advanced digital infrastructure accessible to small businesses across Africa and emerging markets." },
  { icon: Lightbulb, title: "Approach", desc: "We combine modern web technologies with AI automation to deliver practical solutions that drive measurable results." },
  { icon: Users, title: "Focus", desc: "We specialize in restaurants today and are expanding to serve all MSMEs — clinics, retail stores, and service businesses." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
              <h1 className="heading-xl mb-8">Crafting the Future of Business</h1>
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A&F Ventures is a digital consultancy helping small and medium businesses modernize using AI automation, smart websites, and integrated digital systems.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We started by focusing on restaurants and food businesses in Kenya, building everything from booking systems and AI chatbots to full analytics dashboards. Our vision is to expand these solutions to MSMEs across multiple industries and emerging markets.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We believe every small business deserves enterprise-grade digital infrastructure — and we make it accessible.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Work With Us <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              {...fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card p-12 md:p-16 flex items-center justify-center glow-border">
                <img src={logo} alt="A&F Ventures" className="max-w-[280px] w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8"
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="mt-16 grid md:grid-cols-3 gap-6 text-center" {...fadeUp}>
            {[
              { label: "Focus", value: "Restaurants & MSMEs" },
              { label: "Location", value: "Kenya & Emerging Markets" },
              { label: "Expertise", value: "AI, Automation & Web" },
            ].map((item, i) => (
              <div key={i} className="py-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{item.label}</p>
                <p className="font-display font-bold text-lg gradient-text">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
