import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/reviews", label: "Reviews" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-[hsl(var(--gold)/0.2)] shadow-[0_4px_30px_-10px_hsl(232_66%_10%/0.6)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-grid flex items-center justify-between h-20 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="A&F Ventures" className="h-14 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-[hsl(var(--gold))] active"
                    : "text-foreground/80 hover:text-[hsl(var(--gold))]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[hsl(var(--gold)/0.2)] bg-background/95 backdrop-blur-xl px-6 py-6 space-y-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base font-medium py-3 transition-colors ${
                    location.pathname === link.to ? "text-[hsl(var(--gold))]" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="cta" size="default" className="w-full mt-4" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <WhatsAppButton />
      <BackToTop />

      <footer className="border-t border-[hsl(var(--gold)/0.15)] bg-[hsl(229_70%_8%)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[hsl(var(--gold)/0.08)] blur-3xl pointer-events-none" />

        <div className="container-grid py-16 md:py-20 relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <img src={logo} alt="A&F Ventures" className="h-16 w-auto mb-4" />
              <p className="body-md max-w-sm mb-6">
                Empowering restaurants and MSMEs with AI-powered digital systems to modernize, grow, and thrive.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/254713946999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground/70 hover:text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.1)] transition-colors">
                  <Phone size={16} />
                </a>
                <a href="mailto:avidharani110@gmail.com" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground/70 hover:text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.1)] transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-sm uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
                Pages
              </p>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-sm uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <a href="mailto:avidharani110@gmail.com" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors">
                  <Mail size={14} />
                  avidharani110@gmail.com
                </a>
                <a href="mailto:notta.fadeel@gmail.com" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors">
                  <Mail size={14} />
                  notta.fadeel@gmail.com
                </a>
                <a href="https://wa.me/254713946999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors">
                  <Phone size={14} />
                  +254 713 946 999
                </a>
                <p className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPin size={14} />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="glow-divider mt-12 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} A&F Ventures. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-sm text-foreground/60 hover:text-[hsl(var(--gold))] transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm text-foreground/60 hover:text-[hsl(var(--gold))] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
