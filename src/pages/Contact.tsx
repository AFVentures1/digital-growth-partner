import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, ArrowRight, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const businessType = (formData.get("business_type") as string)?.trim() || null;
    const message = (formData.get("message") as string).trim();

    if (!name || !email || !message || name.length > 200 || email.length > 255 || message.length > 2000) {
      toast.error("Please fill in all required fields correctly.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("business_inquiries").insert({
      name,
      email,
      business_type: businessType,
      message,
    });

    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

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
                <a href="https://wa.me/254713946999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                    <p className="text-foreground text-sm">+254 713 946 999</p>
                  </div>
                </a>
                <a href="tel:+254743865286" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground text-sm">+254 743 865 286</p>
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
                    <Input name="name" required maxLength={200} placeholder="Your name" className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
                    <Input name="email" required type="email" maxLength={255} placeholder="you@company.com" className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Business Type</label>
                    <Input name="business_type" maxLength={100} placeholder="Restaurant, Clinic, Retail..." className="bg-background border-border/50 rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
                    <Textarea name="message" required maxLength={2000} placeholder="Tell us about your business and what you need" rows={4} className="bg-background border-border/50 rounded-lg resize-none" />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Get a Free Business Audit"}
                    {!loading && <ArrowRight size={16} />}
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
