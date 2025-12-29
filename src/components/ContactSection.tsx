import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Vamos conversar
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Tem um <span className="text-gradient">projeto</span> em mente?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e desafios. 
          Entre em contato e vamos criar algo incrível juntos.
        </p>
        
        <a 
          href="mailto:contato@thalyson.dev"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 glow"
        >
          <span>Enviar mensagem</span>
          <Send className="w-5 h-5" />
        </a>
      </div>
      
      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Thalyson. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Feito com <span className="text-primary">♥</span> no Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
