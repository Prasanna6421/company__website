import { Reveal } from "./Reveal";
import { Award, ShieldCheck, Users, Wrench } from "lucide-react";
import workshop from "@/assets/workshop-team.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-steel overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-amber opacity-20 blur-3xl rounded-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-deep bg-secondary group">
                <img
                  src={workshop}
                  alt="Sri Prasanna Engineering workshop team"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-bottom-8 lg:-right-8 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-amber max-w-[140px] sm:max-w-none">
                <div className="font-display text-2xl sm:text-3xl lg:text-5xl text-gradient-amber leading-none">23+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-muted-foreground mt-1">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
                About Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
                Engineering <span className="text-gradient-amber">Trust</span>
                <br />
                Since 2001
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Sri Prasanna Engineering & Fabrication Works is a Trichy-based steel
                fabrication contractor with over two decades of expertise serving
                Architects, Colleges, Air Force, Hotels, Villas, Commercial and
                Industrial projects across Tamil Nadu.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our commitment to <span className="text-foreground font-semibold">Quality, Durability and Customization</span> has
                earned us the trust of premier institutions and leading architects.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { icon: Award, t: "ISO Standards", d: "Quality assured workflows" },
                { icon: ShieldCheck, t: "Safety First", d: "Trained on-site teams" },
                { icon: Wrench, t: "Custom Builds", d: "Engineered to spec" },
                { icon: Users, t: "Expert Crew", d: "Skilled fabricators" },
              ].map((b, i) => (
                <Reveal key={b.t} delay={0.1 * i}>
                  <div className="glass-card rounded-xl p-5 hover-lift">
                    <b.icon className="text-primary mb-3" size={28} />
                    <div className="font-display text-lg">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
