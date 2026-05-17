import { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/917010513353?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Opening WhatsApp to send your enquiry!");
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-steel overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Let's Build Something <span className="text-gradient-amber">Strong</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 h-full">
              {[
                { icon: MapPin, t: "Visit Workshop", d: "Trichy, Tamil Nadu, India", href: "https://maps.app.goo.gl/fDbSFP7KgSCDF4116", external: true },
                { icon: Phone, t: "Call Us", d: "+91 7010513353", href: "tel:+917010513353" },
                { icon: Mail, t: "Email", d: "sriprasanna6421@gmail.com", href: "mailto:sriprasanna6421@gmail.com" },
                { icon: Clock, t: "Working Hours", d: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((c) => (
                <a
                  key={c.t}
                  href={c.href || "#"}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="flex items-start gap-4 glass-card rounded-2xl p-5 hover-lift block"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-amber flex items-center justify-center">
                    <c.icon className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-display text-lg mt-1">{c.d}</div>
                  </div>
                </a>
              ))}

              <a
                href="https://maps.app.goo.gl/fDbSFP7KgSCDF4116"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl overflow-hidden border border-border h-64 relative group"
              >
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Trichy,Tamil+Nadu&output=embed"
                  className="w-full h-full grayscale contrast-125 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card rounded-2xl p-8 lg:p-10 space-y-5 h-full">
              <h3 className="font-display text-2xl mb-2">Request a Quote</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full px-4 py-3 bg-input border border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full px-4 py-3 bg-input border border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full px-4 py-3 bg-input border border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project Details</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full px-4 py-3 bg-input border border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-amber text-primary-foreground font-semibold rounded-full shadow-amber hover:scale-[1.02] transition-transform"
              >
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
