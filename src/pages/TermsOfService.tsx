import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function TermsOfService() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Legal</p>
            <h1 className="heading-xl mb-10">Terms of Service</h1>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <div>
                <h2 className="heading-md text-foreground mb-3">1. Agreement</h2>
                <p>By accessing and using the A&F Ventures website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">2. Services</h2>
                <p>A&F Ventures provides digital consulting, website development, AI chatbot integration, automation workflows, CRM systems, and related technology services for businesses. The specific scope of services will be outlined in individual project agreements.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">3. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Provide accurate and complete information as needed for project delivery</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Make payments according to agreed-upon schedules</li>
                  <li>Use our services and deliverables in compliance with applicable laws</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">4. Intellectual Property</h2>
                <p>Upon full payment, clients receive ownership of custom-built deliverables (websites, dashboards, etc.). A&F Ventures retains the right to showcase completed projects in our portfolio unless otherwise agreed in writing.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">5. Payment Terms</h2>
                <p>Payment terms are outlined in individual project proposals. Late payments may result in project delays or suspension of services. All fees are non-refundable once work has commenced unless otherwise agreed.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">6. Limitation of Liability</h2>
                <p>A&F Ventures shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">7. Termination</h2>
                <p>Either party may terminate a service agreement with written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">8. Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
              </div>

              <div>
                <h2 className="heading-md text-foreground mb-3">9. Contact</h2>
                <p>For questions about these Terms, contact us at <a href="mailto:avidharani110@gmail.com" className="text-primary hover:underline">avidharani110@gmail.com</a>.</p>
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
