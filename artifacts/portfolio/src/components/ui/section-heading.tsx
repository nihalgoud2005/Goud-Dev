import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20, y: align === "center" ? 20 : 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-2"
      >
        {align === "left" && <div className="h-px w-12 bg-primary" />}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground">
          {title}
        </h2>
        {align === "center" && (
          <div className="absolute -z-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
        )}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground font-mono text-sm uppercase tracking-widest mt-2"
        >
          // {subtitle}
        </motion.p>
      )}
    </div>
  );
}
