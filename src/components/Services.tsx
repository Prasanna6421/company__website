import { Reveal } from "./Reveal";
import {
  Building2, Hammer, DoorOpen, Layers, Home,
  Zap, Settings, PanelTop, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Hammer, title: "All Kind of MS & SS Works", desc: "Mild & stainless steel fabrication, custom built." },
  { icon: DoorOpen, title: "Main Gates", desc: "Premium designer main gates for villas and estates." },
  { icon: Layers, title: "Staircase & Railing", desc: "Modern steel staircases and railings with sleek finishes." },
  { icon: PanelTop, title: "Pergola & Glass", desc: "Pergolas, skylights and architectural glass works." },
  { icon: Building2, title: "PEB (Pre Engineered Building) Structures", desc: "Pre-engineered buildings designed for strength and scale." },
  { icon: Home, title: "Clay Roofing & Shed", desc: "Heritage clay roofing and durable industrial shed works." },
  { icon: Zap, title: "Laser Cutting", desc: "High-precision CNC laser cutting for intricate designs." },
  { icon: Settings, title: "HPL, ACP, Poly Carbon Sheet Works", desc: "Modern facade cladding for premium aesthetics." },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              What We Do
            </span>  
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Complete <span className="text-gradient-amber">MS & SS Fabrication Solutions</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              From main gates and railings to pergolas, skylights, roofing sheds, cladding, and custom laser-cut designs — we deliver every fabrication need under one roof.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full glass-card rounded-2xl p-6 hover-lift cursor-pointer overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-amber flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="text-primary-foreground" size={26} />
                  </div>
                  <h3 className="font-display text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
