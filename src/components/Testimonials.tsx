import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Am working with Kishen since 2018. The rapport & comfort level is so nice that we have been working repeatedly on multiple tailor made residences jointly solving several structural challenges till date. He understands the precise requirements & expectations of the architect & comes up with sensible solutions to implement practically. Beyond professional expertise, he is very much approachable, charges reasonably, responds on time, willing to improvise & revise changes & justifies the situation of each site situation sensibly.",
    name: "Architect. Karthikeyan Chandrasekar",
    role: "StudioLines, Trichy",
  },
  {
    quote: "We have worked with them on various projects, especially for the fabricated designer doors and working table for our Architecture office. Till date, the quality has been outstanding, and they delivered the exact design we asked for. They bring the right mix of experience and new-gen involvement, which makes their work unique and reliable.",
    name: "Architect. Ranjith Kumar",
    role: "RAN CASA, Trichy",
  },
  {
    quote:"Got a best work from their team which was very much technical and hard to done.They did their job on time with good quality & better price.",
    name: "Savithri Parthiban",
    role: "PKT Residence Trichy",
  },
];



export const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Client Voices
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              What Our <span className="text-gradient-amber">Clients Say</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="relative h-full glass-card rounded-2xl p-8 hover-lift">
                <Quote className="absolute top-6 right-6 text-primary/20" size={56} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="pt-6 border-t border-border">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
