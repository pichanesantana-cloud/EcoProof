import { Shield, Camera, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Validação Transparente",
    description: "Cada ação é registrada na blockchain com foto, localização e timestamp, garantindo transparência total.",
  },
  {
    icon: Camera,
    title: "Prova de Impacto",
    description: "Upload de fotos georreferenciadas e validação comunitária para comprovar suas ações ambientais.",
  },
  {
    icon: Zap,
    title: "NFTs Dinâmicos",
    description: "Seus NFTs evoluem conforme seu impacto cresce, criando uma identidade ambiental única on-chain.",
  },
  {
    icon: TrendingUp,
    title: "Recompensas Reais",
    description: "Ganhe tokens, badges e reputação que podem ser trocados por benefícios e reconhecimento.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Como <span className="text-gradient">Funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Registre, valide e seja recompensado por suas ações ambientais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/50"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 eco-gradient rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
