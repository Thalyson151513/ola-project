import { Code, Palette, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Código limpo e eficiente com as melhores práticas do mercado.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces modernas e intuitivas que encantam os usuários.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas para a melhor experiência.",
  },
  {
    icon: Globe,
    title: "Web Moderna",
    description: "Tecnologias de ponta para criar soluções inovadoras.",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            O que eu faço
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 card-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
