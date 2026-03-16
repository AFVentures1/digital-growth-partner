import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Legal</p>
            <h1 className="heading-xl mb-10">Privacy Policy</h1>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <div>
                <h2 className="heading-md text-foreground mb-3">1. Information We Collect</h2>
                <p>When you use our services or contact us through our website, we may collect the following information:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Your name and email address</li>
                  <li>Your business name and type</li>
                  <li>Messages and inquiries you submit through our contact form</li>
                  <li>Usage data such as pages visited and time spent on our site</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Improve our website and services</li>
                  <li>Send you relevant updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">3. Data Protection</h2>
                <p>We take the security of your data seriously. All information submitted through our website is encrypted in transit and stored securely. We do not sell, trade, or share your personal information with third parties except as required to provide our services or comply with the law.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">4. Cookies</h2>
                <p>Our website may use cookies to improve your browsing experience. You can control cookie settings through your browser preferences.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">6. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:avidharani110@gmail.com" className="text-primary hover:underline">avidharani110@gmail.com</a>.</p>
              </div>

              <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border/50">
                Last updated: March 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
