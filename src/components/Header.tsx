import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Services", "How It Works", "Testimonials", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 px-4 text-center text-sm">
        <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
          <Phone size={14} />
          Call Now for Immediate Assistance — (800) 555-1234
        </a>
      </div>

      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="/" className="text-xl font-bold tracking-tight">
            <span className="text-gradient">Owen</span>
            <span className="text-foreground">Tech</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            ))}
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors glow-box"
            >
              <Phone size={14} />
              Get Help Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-card"
            >
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link)}
                    className="text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {link}
                  </button>
                ))}
                <a
                  href="tel:+18005551234"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold"
                >
                  <Phone size={14} />
                  Get Help Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
