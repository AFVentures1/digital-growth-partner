import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl mb-6">
                Start Modernizing Your Business Today
              </h1>
              <p className="body-lg mb-10">
                Book a free consultation and discover how digital systems can help you grow.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </p>
                  <p className="text-foreground">info@afventures.co.ke</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    WhatsApp
                  </p>
                  <p className="text-foreground">+254 700 000 000</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="text-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {submitted ? (
                <div className="bg-card rounded-sm p-8 md:p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <p className="heading-md mb-3">Thank You</p>
                    <p className="body-md">We'll be in touch within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-sm p-8 md:p-12 space-y-5"
                >
                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      required
                      placeholder="Your name"
                      className="bg-background border-border rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="bg-background border-border rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Business Type
                    </label>
                    <Input
                      placeholder="Restaurant, Clinic, Retail..."
                      className="bg-background border-border rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your business and what you need"
                      rows={4}
                      className="bg-background border-border rounded-sm resize-none"
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    Book a Free Consultation
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
