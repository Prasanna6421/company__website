import { Reveal } from "./Reveal";
import { GraduationCap, Plane, Hotel, Home, Building, Factory } from "lucide-react";

const sectors = [
  { icon: GraduationCap, name: "Colleges", desc: "Educational campuses" },
  { icon: Plane, name: "Air Force", desc: "Defense facilities" },
  { icon: Hotel, name: "Hotels", desc: "Hospitality projects" },
  { icon: Home, name: "Villas", desc: "Luxury residences" },
  { icon: Building, name: "Commercial", desc: "Offices & retail" },
  { icon: Factory, name: "Industrial", desc: "Plants & warehouses" },
];

export const Sectors = () => {
  return (
    <section id="sectors" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Industries
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Sectors We <span className="text-gradient-amber">Serve</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {sectors.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="group glass-card rounded-2xl p-6 text-center hover-lift cursor-pointer h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-gradient-amber group-hover:border-primary transition-all duration-500">
                  <s.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={30} />
                </div>
                <h3 className="font-display text-lg">{s.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
