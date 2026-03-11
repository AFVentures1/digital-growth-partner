import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/reviews", label: "Reviews" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="container-grid flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="A&F Ventures" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base font-medium py-3 transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
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

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="container-grid py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <img src={logo} alt="A&F Ventures" className="h-16 w-auto mb-4" />
              <p className="body-md max-w-sm">
                Empowering restaurants and MSMEs with AI-powered digital systems to modernize, grow, and thrive.
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">
                Pages
              </p>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <a href="mailto:avidharani110@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} />
                  avidharani110@gmail.com
                </a>
                <a href="mailto:notta.fadeel@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} />
                  notta.fadeel@gmail.com
                </a>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} A&F Ventures. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafting the Future of Business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
