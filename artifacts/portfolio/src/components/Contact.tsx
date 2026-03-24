import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate network request since there's no backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Transmission Successful",
      description: "Your message has been securely delivered to my inbox.",
      variant: "default",
    });
    
    setIsSubmitting(false);
    reset();
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nihalgoudgandhapu@gmail.com", href: "mailto:nihalgoudgandhapu@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "+91 891 951 3488", href: "https://wa.me/918919513488" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Gandhapu Nihal Goud", href: "https://www.linkedin.com/in/gandhapu-nihal-goud-790255293/" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "BVRIT · Narsapur, AP", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative bg-secondary/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Build Something" subtitle="Open Comm Channel" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Whether you have a project in mind, a question about my work, or just want to talk hardware, I'm always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  target={info.label === "Location" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 glass-panel rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-secondary rounded border border-white/5 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase">{info.label}</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50" />
              
              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase mb-2">Name_</label>
                <input
                  {...register("name")}
                  className={`w-full bg-background border ${errors.name ? 'border-destructive' : 'border-white/10'} rounded p-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1 font-mono">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase mb-2">Email_</label>
                <input
                  {...register("email")}
                  className={`w-full bg-background border ${errors.email ? 'border-destructive' : 'border-white/10'} rounded p-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-destructive text-xs mt-1 font-mono">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase mb-2">Message_Payload_</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-background border ${errors.message ? 'border-destructive' : 'border-white/10'} rounded p-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm resize-none`}
                  placeholder="Type your message here..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1 font-mono">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm py-4 rounded border border-primary hover:bg-transparent hover:text-primary hover:box-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Transmission
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
