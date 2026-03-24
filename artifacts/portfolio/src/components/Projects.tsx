import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Smart Home Automation System",
    category: "Hardware",
    description: "Microcontroller-based home automation via Bluetooth and IR. Controls lighting and appliances with mobile interface.",
    tags: ["Arduino UNO", "Embedded C", "Bluetooth HC-05", "Relay Module"],
    link: "#"
  },
  {
    title: "Air Quality Monitoring Station",
    category: "IoT",
    description: "Real-time environmental monitoring system with cloud logging capabilities and alert thresholds.",
    tags: ["NodeMCU ESP8266", "MQ-135 Sensor", "ThingSpeak API", "IoT"],
    link: "#"
  },
  {
    title: "Digital FIR Filter Design",
    category: "Signal Processing",
    description: "Designed a FIR low-pass filter using Hamming window in MATLAB for effective ECG noise removal and signal cleaning.",
    tags: ["MATLAB", "DSP", "FIR Filter", "Signal Analysis"],
    link: "#"
  },
  {
    title: "4-bit ALU on FPGA",
    category: "VLSI",
    description: "Hardware implementation of a 4-bit Arithmetic Logic Unit in VHDL, synthesized and tested on Xilinx Spartan-7.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA", "Digital Logic"],
    link: "#"
  },
  {
    title: "8051 Traffic Light Controller",
    category: "Embedded",
    description: "Adaptive traffic light management system with pedestrian crossing detection, written purely in Assembly.",
    tags: ["8051 MCU", "Assembly", "IR Sensor", "Keil uVision"],
    link: "#"
  },
  {
    title: "Custom PCB for Sensor Hub",
    category: "PCB",
    description: "Designed and routed a 2-layer custom printed circuit board for an IoT sensor aggregation hub.",
    tags: ["EasyEDA", "PCB Layout", "Gerber Files", "Soldering"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-secondary/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Executed Directives" subtitle="Project Repository" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full flex flex-col glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:box-glow overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-background border border-white/10 rounded">
                    <FolderGit2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-secondary rounded border border-white/5 text-muted-foreground group-hover:text-primary transition-colors">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center gap-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-2">
                    Inspect Logic <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
