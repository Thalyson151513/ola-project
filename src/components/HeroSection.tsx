import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary animate-float" />
      <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-primary/60 animate-float delay-200" />
      <div className="absolute top-1/3 left-10 w-1 h-1 rounded-full bg-primary/40 animate-float delay-400" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="animate-fade-up text-primary font-medium tracking-widest uppercase text-sm mb-6">
          Bem-vindo ao meu universo
        </p>
        
        <h1 className="animate-fade-up delay-100 font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Thalyson</span>
        </h1>
        
        <p className="animate-fade-up delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Desenvolvedor apaixonado por criar experiências digitais únicas e memoráveis. Transformando ideias em realidade.
        </p>
        
        {/* Social links */}
        <div className="animate-fade-up delay-300 flex items-center justify-center gap-6 mb-16">
          <a 
            href="#" 
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-fade-up delay-500 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Role para explorar</span>
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
