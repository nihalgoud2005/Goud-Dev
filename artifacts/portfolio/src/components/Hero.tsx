import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Zap, Radio, Code2 } from "lucide-react";

export function Hero() {
  const coreSkills = ["VLSI Design", "Embedded C", "IoT", "Arduino", "Signal Processing", "PCB Design"];

  const photoRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-18, 18]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-1, 1], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-1, 1], [0, 100]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = photoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set((e.clientX - cx) / (rect.width / 2));
    mouseY.set((e.clientY - cy) / (rect.height / 2));
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center gap-8">

          {/* ── Photo at the very top ── */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 800 }}
          >
            <motion.div
              ref={photoRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-36 h-36 sm:w-44 sm:h-44 cursor-none"
            >
              {/* Animated outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/40"
              />
              {/* Pulsing glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/60 animate-pulse" />

              {/* Moving spotlight inside the photo based on cursor */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none z-10"
                style={{
                  background: useTransform(
                    [glowX, glowY],
                    ([x, y]) =>
                      hovered
                        ? `radial-gradient(circle at ${x}% ${y}%, rgba(0,255,255,0.18) 0%, transparent 70%)`
                        : "none",
                  ),
                }}
              />

              {/* Photo — grayscale when idle, full colour on hover */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/40">
                <motion.img
                  src={`${import.meta.env.BASE_URL}nihal-photo.png`}
                  alt="Gandhapu Nihal Goud"
                  animate={{
                    filter: hovered
                      ? "grayscale(0%) brightness(1.1) saturate(1.2)"
                      : "grayscale(100%) brightness(0.75)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-top scale-[1.02]"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-panel px-3 py-1.5 rounded-full border border-primary/40 z-30 flex items-center gap-1.5 whitespace-nowrap shadow-lg"
              >
                <Radio className="w-3 h-3 text-primary" />
                <p className="text-[10px] font-bold text-foreground tracking-wide">Available for Work</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Text content below photo ── */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-medium"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>System Initialized</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
            >
              <span className="block text-muted-foreground text-xl sm:text-2xl mb-1 font-light">Hi, I am</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                Gandhapu Nihal Goud
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-2xl font-mono text-primary flex items-center justify-center gap-2"
            >
              <Cpu className="w-5 h-5" />
              ECE Engineer · BVRIT · Narsapur
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              3rd year Electronics &amp; Communication Engineering student building at the intersection of
              embedded systems, signal processing, and IoT.{" "}
              <span className="text-foreground font-medium">I turn circuits into solutions.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary border border-border rounded font-mono text-xs text-muted-foreground flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-foreground font-bold uppercase tracking-widest text-sm rounded border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <Code2 className="w-4 h-4 text-primary group-hover:animate-pulse" />
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
