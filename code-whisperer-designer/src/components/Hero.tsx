import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ecoproof.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ações ambientais de preservação" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 eco-gradient opacity-40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 eco-gradient rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-40 right-20 w-40 h-40 eco-gradient-2 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <Badge className="eco-gradient text-lg px-6 py-2 animate-glow">
            <Sparkles className="w-5 h-5 mr-2" />
            Powered by Sui Blockchain
          </Badge>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="text-gradient">EcoProof</span>
          <br />
          Impacto On-Chain
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Transforme suas ações ambientais em NFTs dinâmicos. 
          Ganhe recompensas, construa reputação e faça a diferença de forma transparente na blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Leaf className="w-6 h-6 mr-2" />
            Registrar Ação
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6">
            <Shield className="w-6 h-6 mr-2" />
            Ver Missões
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">1.5K+</div>
            <div className="text-muted-foreground">Ações Registradas</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">800+</div>
            <div className="text-muted-foreground">Voluntários Ativos</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Transparente</div>
          </div>
        </div>
      </div>
    </section>
  );
};
