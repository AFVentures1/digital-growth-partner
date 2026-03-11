import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container-grid flex items-center justify-between h-16">
          <Link to="/" className="font-display font-bold text-xl tracking-tight text-foreground">
            A&F VENTURES
          </Link>

          {/* Desktop / Tablet nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-background px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" className="w-full mt-2" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container-grid py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-bold text-lg tracking-tight text-foreground mb-3">
                A&F VENTURES
              </p>
              <p className="body-md">
                Digital systems and AI automation for small businesses.
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                Navigation
              </p>
              <div className="space-y-2">
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
              <p className="font-display font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                Contact
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@afventures.co.ke</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-10 pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} A&F Ventures. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
