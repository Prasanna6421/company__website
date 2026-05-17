import { Reveal } from "./Reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { CheckCircle2, Clock, Palette, Users2, ShieldCheck } from "lucide-react";

const features = [
  { icon: CheckCircle2, title: "Quality Materials", desc: "Premium-grade steel sourced from trusted mills." },
  { icon: Clock, title: "On-time Delivery", desc: "Disciplined timelines, no compromises." },
  { icon: Palette, title: "Custom Designs", desc: "Tailored fabrication to match your vision." },
  { icon: Users2, title: "Experienced Team", desc: "Skilled craftsmen with 20+ years on the job." },
  { icon: ShieldCheck, title: "Safety Standards", desc: "Strict compliance and protective practices." },
];

const Counter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div className="text-center">
      <div className="font-display text-5xl lg:text-6xl text-gradient-amber">
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

export const WhyUs = () => {
  return (
    <section id="why" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-steel overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Built on <span className="text-gradient-amber">Trust & Precision</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card rounded-3xl p-8 lg:p-12 mb-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={23} suffix="+" label="Years Experience" />
            <Counter end={100} suffix="+" label="Projects Delivered" />
            <Counter end={50} suffix="+" label="Expert Team" />
            <Counter end={100} suffix="%" label="Client Satisfaction" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group relative h-full p-6 rounded-2xl border border-border bg-card hover:border-primary transition-all duration-500 hover-lift">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
                <f.icon className="text-primary mb-4" size={32} strokeWidth={1.8} />
                <h3 className="font-display text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
