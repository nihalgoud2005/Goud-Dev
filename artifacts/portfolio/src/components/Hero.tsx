import { motion } from "framer-motion";
import { Cpu, Zap, Radio, Code2 } from "lucide-react";

export function Hero() {
  const coreSkills = ["VLSI Design", "Embedded C", "IoT", "Arduino", "Signal Processing", "PCB Design"];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-medium mb-6"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>System Initialized</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="block text-muted-foreground text-2xl sm:text-3xl mb-2 font-light">Hi, I am</span>
              <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Gandhapu Nihal Goud
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-mono text-primary mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <Cpu className="w-6 h-6" />
              ECE Engineer · BVRIT · Narsapur
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              3rd year Electronics & Communication Engineering student building at the intersection of embedded systems, signal processing, and IoT. <span className="text-foreground">I turn circuits into solutions.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
            >
              {coreSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-secondary border border-border rounded font-mono text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded border border-primary hover:bg-transparent hover:text-primary hover:box-glow transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground font-bold uppercase tracking-widest text-sm rounded border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center group flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-primary group-hover:animate-pulse" />
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Photo/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 relative flex flex-col items-center"
          >
            <div className="relative w-44 h-44 sm:w-52 sm:h-52">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
              <div className="absolute -inset-1 rounded-full border border-accent/30" />

              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/40 group">
                <img
                  src={`${import.meta.env.BASE_URL}nihal-photo.png`}
                  alt="Gandhapu Nihal Goud"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-panel px-3 py-2 rounded border border-primary/30 z-30 flex items-center gap-2 box-glow"
              >
                <Radio className="w-4 h-4 text-primary" />
                <p className="text-xs font-bold text-foreground whitespace-nowrap">Available for Work</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
