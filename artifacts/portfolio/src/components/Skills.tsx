import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { Cpu, Microchip, Activity, Wrench, Wifi } from "lucide-react";

const skillCategories = [
  {
    title: "Microcontrollers & Embedded",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Arduino (UNO, Nano, Mega)", "ESP8266/ESP32 (NodeMCU)", "Intel 8051", "Embedded C/Assembly", "Keil uVision IDE"]
  },
  {
    title: "VLSI & Digital Design",
    icon: <Microchip className="w-5 h-5" />,
    skills: ["VHDL/Verilog HDL", "Xilinx Vivado/ISE", "FPGA Programming", "Logic Circuit Design", "Timing & Simulation"]
  },
  {
    title: "Signal & Communication",
    icon: <Activity className="w-5 h-5" />,
    skills: ["MATLAB/Simulink", "DSP — FIR/IIR Filters", "Analog Circuit Analysis", "AM/FM Modulation", "Antenna Fundamentals"]
  },
  {
    title: "PCB & Hardware Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["EasyEDA/KiCad", "Multisim", "Oscilloscope & DMM", "Soldering & Prototyping", "Gerber File Export"]
  },
  {
    title: "IoT & Connectivity",
    icon: <Wifi className="w-5 h-5" />,
    skills: ["ThingSpeak/Blynk", "MQTT Protocol", "Bluetooth & Wi-Fi Modules", "REST API Integration", "Sensor Interfacing"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="Skills Matrix" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border border-white/5 bg-secondary/50 backdrop-blur-sm ${index === 4 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-primary/10 text-primary rounded border border-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 bg-background border border-white/10 hover:border-primary/50 rounded font-mono text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
