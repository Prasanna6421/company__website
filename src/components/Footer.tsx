import logo from "@/assets/logo.jpg";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-steel-900 border-t border-border pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-amber" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-14 w-14 rounded-full ring-2 ring-primary/40" />
              <div>
                <div className="font-display text-lg">SRI <span className="text-gradient-amber">PRASANNA</span></div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Engineering & Fabrication</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Trichy's trusted steel fabrication contractors since 2001. Quality. Durability. Customization.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-sm uppercase tracking-widest text-primary mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Services", "Projects", "Sectors", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm uppercase tracking-widest text-primary mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /> Trichy, Tamil Nadu</li>
              <li className="flex gap-3"><Phone size={16} className="text-primary shrink-0 mt-0.5" /> +91 7010513353</li>
              <li className="flex gap-3"><Mail size={16} className="text-primary shrink-0 mt-0.5" /> sriprasanna6421@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Sri Prasanna Engineering & Fabrication Works. All rights reserved.</div>
          <div>Quality • Durability • Customization — since 2001</div>
        </div>
      </div>
    </footer>
  );
};
