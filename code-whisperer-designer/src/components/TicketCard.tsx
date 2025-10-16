import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import actionImage from "@/assets/action-nft.jpg";

interface ActionCardProps {
  actionName: string;
  impact: string;
  actionId: string;
  imageUrl?: string;
}

export const ActionCard = ({ actionName, impact, actionId, imageUrl }: ActionCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl || actionImage} 
          alt={actionName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <Badge className="absolute top-4 right-4 eco-gradient">NFT Dinâmico</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{actionName}</h3>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">ID: {actionId.slice(0, 8)}...</span>
          <span className="text-2xl font-bold text-gradient">+{impact} pts</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const TicketCard = ActionCard;
