import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      value: "3rd Year",
      label: "ECE Student",
      detail: "BVRIT Narsapur"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent" />,
      value: "5+",
      label: "Core Projects",
      detail: "Hardware & Software"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      value: "2027",
      label: "Graduating",
      detail: "Available for Internships"
    }
  ];

  return (
    <section id="about" className="py-24 relative relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="System Configuration" subtitle="About Identity" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-xl text-foreground leading-relaxed mb-6 font-light">
              Hi, I'm Nihal — an ECE undergrad at BV Raju Institute of Technology (BVRIT), Narsapur, graduating in 2027.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My coursework spans analog circuits, digital electronics, microprocessors, and communication systems. Beyond textbooks, I'm fascinated by making hardware do things — automating homes, sensing the environment, processing signals in real time. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've worked on embedded projects using Arduino and 8051 microcontrollers, and I'm currently diving deeper into VLSI and FPGA workflows.
            </p>
            <div className="p-4 border-l-2 border-primary bg-primary/5 text-foreground italic">
              "I'm also an active member of E-Cell BVRIT, where I sharpen skills in project management, team leadership, and entrepreneurial thinking."
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    // {stat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
