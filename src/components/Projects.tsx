import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import pebImg from "@/assets/projects/peb.jpg";
import elevationImg from "@/assets/projects/Elevation_new.png";
import skylightsImg from "@/assets/projects/skylights.jpg";
import spiralImg from "@/assets/projects/spiral.jpg";
import modernStairImg from "@/assets/projects/ellipse_staircase.png";
import clayRoofingImg from "@/assets/projects/clay-roofing.jpg";
import railingImg from "@/assets/projects/vertical_Railing.png";
import skylightWorksImg from "@/assets/projects/skylight-works.png";
import customizationWorksImg from "@/assets/projects/customization-works.png";

const projects = [
  { src: pebImg, title: "PEB Structures", category: "PEB" },
  { src: elevationImg, title: "Elevation Works", category: "Elevation" },
  { src: skylightsImg, title: "Open To Sky area", category: "OTS" },
  { src: spiralImg, title: "Spiral Staircase", category: "Staircase" },
  { src: modernStairImg, title: "Modern Staircase", category: "Staircase" },
  { src: clayRoofingImg, title: "Clay Roofing", category: "Roofing" },
  { src: railingImg, title: "Customised Railing Works", category: "Railing" },
  { src: skylightWorksImg, title: "Skylight Works", category: "Skylight" },
  { src: customizationWorksImg, title: "Customization Works", category: "Customization" },
];

export const Projects = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-steel overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
                Our Work
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
                Featured <span className="text-gradient-amber">Projects</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A glimpse into the structures and designs we've delivered across Tamil Nadu.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full image-zoom rounded-2xl overflow-hidden border border-border shadow-deep cursor-pointer block"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-foreground z-10"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[active].src}
                alt={projects[active].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-deep"
              />
              <div className="text-center mt-6">
                <span className="text-xs uppercase tracking-widest text-primary">
                  {projects[active].category}
                </span>
                <h3 className="font-display text-2xl mt-2">{projects[active].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
