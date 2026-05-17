import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-industrial.jpg";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16">
      {/* Parallax bg */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={hero} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </motion.div>

      {/* Diagonal accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 diagonal-stripes opacity-30 hidden lg:block" />

      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Trusted in Trichy since 2001
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          >
           Premium Fabrication
            <br />
            <span className="text-gradient-amber">From Gates to Skylights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed"
          >
            Premium PEB & steel fabrication for Architects, Air Force, Colleges, Hotels,
            Villas and Industries. Engineered with precision. Built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/917010513353?text=Hi,%20I%20need%20a%20quote"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-amber text-primary-foreground font-semibold rounded-full shadow-amber hover:shadow-glow transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Get Quote on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-foreground font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              <Play size={18} />
              View Our Work
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {[
              { v: "25", l: "Years Experience" },
              { v: "100+", l: "Projects Done" },
              { v: "100%", l: "On-Time Delivery" },
              { v: "20+", l: "Expert Team" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary/60 pl-4">
                <div className="font-display text-3xl lg:text-4xl text-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};
