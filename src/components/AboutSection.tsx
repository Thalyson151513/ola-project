const AboutSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image placeholder with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-primary/20">T</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Sobre mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Criando o <span className="text-gradient">futuro</span> digital
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou o Thalyson, um desenvolvedor focado em criar soluções inovadoras 
              e experiências que fazem a diferença. Minha paixão por tecnologia 
              me impulsiona a buscar sempre o melhor resultado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Acredito que a tecnologia pode transformar vidas e negócios. 
              Por isso, dedico meu tempo a aprender novas ferramentas e 
              metodologias para entregar projetos excepcionais.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <span className="block font-display text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Anos de exp.</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <span className="block font-display text-3xl font-bold text-primary">20+</span>
                <span className="text-sm text-muted-foreground">Projetos</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <span className="block font-display text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Dedicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
