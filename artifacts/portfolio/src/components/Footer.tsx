import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 opacity-80">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-display font-bold tracking-wide">
            GNG<span className="text-primary">.dev</span>
          </span>
        </div>

        <p className="text-sm font-mono text-muted-foreground text-center">
          Designed & built with <span className="text-accent">♥</span> · Gandhapu Nihal Goud · ECE @ BVRIT · 2025
        </p>

        <div className="flex gap-4">
          {/* Decorative blocks */}
          <div className="w-2 h-2 bg-primary/40 rounded-sm" />
          <div className="w-2 h-2 bg-accent/40 rounded-sm" />
          <div className="w-2 h-2 bg-primary/40 rounded-sm" />
        </div>
        
      </div>
    </footer>
  );
}
