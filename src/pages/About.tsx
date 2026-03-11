import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, Lightbulb, Users, Rocket, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "Make advanced digital infrastructure accessible to small businesses across Africa and emerging markets. We believe technology should empower, not intimidate." },
  { icon: Lightbulb, title: "Our Approach", desc: "We combine modern web technologies with AI automation to deliver practical solutions that drive measurable results. Every system we build is tailored to your business needs." },
  { icon: Users, title: "Our Focus", desc: "We specialize in restaurants and food businesses today, with a clear vision to expand our solutions to all MSMEs — clinics, retail stores, salons, and service businesses." },
  { icon: Rocket, title: "Our Vision", desc: "To be the leading digital transformation partner for small businesses in emerging markets, making enterprise-grade technology accessible and affordable." },
  { icon: Heart, title: "Our Values", desc: "Integrity, innovation, and impact. We measure our success by the growth of our clients' businesses, not just the technology we deploy." },
];

const founders = [
  {
    name: "Avi Dharani",
    role: "Co-Founder",
    desc: "Avi is a talented technologist and entrepreneur with a passion for building digital solutions that make a real difference for small businesses. With deep expertise in web development, AI systems, and business automation, Avi leads the technical vision at A&F Ventures — designing and architecting the platforms, websites, and AI tools that power our clients' growth. His hands-on approach ensures every solution is built to the highest standard.",
    initial: "A",
  },
  {
    name: "Fadeel Notta",
    role: "Co-Founder",
    desc: "Fadeel is a talented strategist and business developer who brings a sharp understanding of market dynamics and client needs. He drives client relationships, business strategy, and go-to-market execution at A&F Ventures. Fadeel's ability to translate complex technology into clear business value is what makes our consulting approach unique — ensuring every client gets solutions that are not just technically excellent, but commercially impactful.",
    initial: "F",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="section-padding">
        <div className="container-grid">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
              <h1 className="heading-xl mb-8">Crafting the Future of Business</h1>
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A&F Ventures is a digital consultancy founded by two talented entrepreneurs — <strong className="text-foreground">Avi Dharani</strong> and <strong className="text-foreground">Fadeel Notta</strong> — with a shared mission to help small and medium businesses modernize using AI automation, smart websites, and integrated digital systems.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We started by focusing on restaurants and food businesses in Kenya, building everything from booking systems and AI chatbots to full analytics dashboards. Our work with clients like Qaffee Point Restaurant and Almas Electronics has proven that smart technology, when properly implemented, can transform how small businesses operate and grow.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our vision is bold: to become the go-to digital transformation partner for MSMEs across Africa and emerging markets. We believe every small business deserves enterprise-grade digital infrastructure — and we're making it accessible, affordable, and impactful.
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
              style={{ y: heroY }}
              {...fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card p-12 md:p-16 flex items-center justify-center glow-border">
                <img src={logo} alt="A&F Ventures" className="max-w-[300px] w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="heading-lg">Meet the Founders</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500"
                {...fadeUp}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-2xl">{f.initial}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{f.name}</h3>
                    <p className="text-sm text-primary font-medium">{f.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-border/50">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="heading-lg">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 hover:border-primary/30 transition-all duration-500"
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
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
