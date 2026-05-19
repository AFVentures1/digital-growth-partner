import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, Lightbulb, Users, Rocket, Heart, User } from "lucide-react";

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
    role: "Co-Founder · Strategy & Growth",
    desc: "Avi is a talented strategist and business developer who brings a sharp understanding of market dynamics and client needs. He drives client relationships, business strategy, and go-to-market execution at A&F Ventures. Avi's ability to translate complex technology into clear business value is what makes our consulting approach unique — ensuring every client gets solutions that are not just technically excellent, but commercially impactful.",
    placeholder: "[CO-FOUNDER 1 PHOTO]",
    image: null as string | null,
  },
  {
    name: "Fadeel Notta",
    role: "Co-Founder · Technology & Product",
    desc: "Fadeel is a talented technologist and entrepreneur with a passion for building digital solutions that make a real difference for small businesses. With deep expertise in web development, AI systems, and business automation, Fadeel leads the technical vision at A&F Ventures — designing and architecting the platforms, websites, and AI tools that power our clients' growth. His hands-on approach ensures every solution is built to the highest standard.",
    placeholder: "[CO-FOUNDER 2 PHOTO]",
    image: null as string | null,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-40" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] hero-orb royal" />

        <div className="container-grid relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeUp}>
            <p className="text-sm font-semibold text-[hsl(var(--gold))] uppercase tracking-widest mb-3">About Us</p>
            <h1 className="heading-xl mb-8 gold-underline">Crafting the Future of Business</h1>
            <div className="space-y-5 text-justify">
              <p className="text-lg text-foreground/85 leading-relaxed">
                A&F Ventures is a digital consultancy founded by two talented entrepreneurs — <strong className="text-[hsl(var(--gold))]">Avi Dharani</strong> and <strong className="text-[hsl(var(--gold))]">Fadeel Notta</strong> — with a shared mission to help small and medium businesses modernize using AI automation, smart websites, and integrated digital systems.
              </p>
              <p className="text-base text-foreground/75 leading-relaxed">
                We started by focusing on restaurants and food businesses in Kenya, building everything from booking systems and AI chatbots to full analytics dashboards. Our work with clients like Qaffee Point Restaurant and Almas Electronics has proven that smart technology, when properly implemented, can transform how small businesses operate and grow.
              </p>
              <p className="text-base text-foreground/75 leading-relaxed">
                Our vision is bold: to become the go-to digital transformation partner for MSMEs across Africa and emerging markets. We believe every small business deserves enterprise-grade digital infrastructure — and we're making it accessible, affordable, and impactful.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Work With Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding border-t border-[hsl(var(--gold)/0.15)] relative overflow-hidden">
        {/* Royal radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(232_66%_30%/0.35),transparent_60%)]" />
        </div>

        <div className="container-grid relative z-10">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-[hsl(var(--gold))] uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="heading-lg gold-underline">Meet the Founders</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative rounded-2xl p-8 md:p-10 bg-[hsl(229_70%_12%)] border-2 border-[hsl(var(--gold)/0.4)] hover:border-[hsl(var(--gold))] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.4)] group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Profile placeholder / image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-[hsl(var(--gold)/0.3)] blur-xl group-hover:bg-[hsl(var(--gold)/0.5)] transition-all" />
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-[hsl(var(--gold))] bg-[hsl(232_66%_20%)] flex items-center justify-center">
                      {f.image ? (
                        <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center gap-2 px-4">
                          <User size={48} className="text-[hsl(var(--gold)/0.6)]" />
                          <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold)/0.7)] text-center leading-tight">
                            {f.placeholder}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{f.name}</h3>
                  <p className="text-sm text-[hsl(var(--gold))] font-medium tracking-wide mb-6">{f.role}</p>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed text-justify">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-[hsl(var(--gold)/0.15)]">
        <div className="container-grid">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="text-sm font-semibold text-[hsl(var(--gold))] uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="heading-lg gold-underline">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className="glass-card gold-card-accent p-8"
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--gold)/0.15)] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[hsl(var(--gold))]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed text-justify">{v.desc}</p>
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
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-2">{item.label}</p>
                <p className="font-display font-bold text-lg gradient-text">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
