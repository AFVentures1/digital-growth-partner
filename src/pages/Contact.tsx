import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
              <h1 className="heading-xl mb-6">
                Start Modernizing Your Business Today
              </h1>
              <p className="body-lg mb-12">
                Book a free consultation and discover how digital systems can help you grow.
              </p>

              <div className="space-y-6">
                <a href="mailto:avidharani110@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground text-sm">avidharani110@gmail.com</p>
                  </div>
                </a>
                <a href="mailto:notta.fadeel@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground text-sm">notta.fadeel@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                    <p className="text-foreground text-sm">+254 700 000 000</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              {submitted ? (
                <div className="glass-card p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail size={28} className="text-primary" />
                    </div>
                    <p className="heading-md mb-3">Thank You</p>
                    <p className="body-md">We'll be in touch within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                    <Input required placeholder="Your name" className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
                    <Input required type="email" placeholder="you@company.com" className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Business Type</label>
                    <Input placeholder="Restaurant, Clinic, Retail..." className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
                    <Textarea required placeholder="Tell us about your business and what you need" rows={4} className="bg-background border-border/50 rounded-lg resize-none" />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    Get a Free Business Audit <ArrowRight size={16} />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
