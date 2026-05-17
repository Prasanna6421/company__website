import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Sectors", href: "#sectors" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background border-b border-border ${
        scrolled ? "shadow-deep" : ""
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div
            className="flex items-center gap-3 group"
            onMouseEnter={() => setLogoOpen(true)}
            onMouseLeave={() => setLogoOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLogoOpen((v) => !v)}
              aria-label="Expand logo"
              className="relative focus:outline-none"
            >
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:bg-primary/50 transition-all" />
              <img
                src={logo}
                alt="Sri Prasanna Engineering Logo"
                className="relative h-14 w-14 lg:h-16 lg:w-16 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all"
              />
            </button>
            <a href="#home" className="hidden sm:block leading-tight">
              <div className="font-display text-base lg:text-lg text-foreground tracking-wide">
                SRI <span className="text-gradient-amber">PRASANNA</span>
              </div>
              <div className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase">
                Engineering & Fabrication
              </div>
            </a>
          </div>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="pointer-events-none absolute left-4 right-4 bottom-1 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/917010513353?text=Hi,%20I%20need%20a%20quote"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                Get Quote
                <span className="pointer-events-none absolute left-4 right-4 bottom-1 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </li>
          </ul>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-1 border-t border-border">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        const id = l.href.replace("#", "");
                        setTimeout(() => {
                          const el = document.getElementById(id);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                            history.replaceState(null, "", l.href);
                          }
                        }, 150);
                      }}
                      className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://wa.me/917010513353?text=Hi,%20I%20need%20a%20quote"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-3 bg-gradient-amber text-primary-foreground font-semibold rounded-full"
                  >
                    Get Quote on WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {logoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-md"
              onClick={() => setLogoOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLogoOpen(false); }}
                aria-label="Close logo"
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <motion.img
                src={logo}
                alt="Sri Prasanna Engineering Logo"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[85vw] max-h-[80vh] rounded-2xl object-contain shadow-amber ring-4 ring-primary/40"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
