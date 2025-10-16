import { ActionCard } from "./TicketCard";

const mockActions = [
  {
    actionName: "Limpeza Lago Paranoá",
    impact: "150",
    actionId: "0x1a2b3c4d5e6f7g8h",
  },
  {
    actionName: "Reciclagem Comunitária",
    impact: "85",
    actionId: "0x2b3c4d5e6f7g8h9i",
  },
  {
    actionName: "Plantio de Árvores",
    impact: "200",
    actionId: "0x3c4d5e6f7g8h9i0j",
  },
  {
    actionName: "Limpeza de Praia",
    impact: "120",
    actionId: "0x4d5e6f7g8h9i0j1k",
  },
];

export const TicketsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Ações <span className="text-gradient">Recentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira as ações ambientais registradas e validadas na blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockActions.map((action, index) => (
            <ActionCard key={index} actionName={action.actionName} impact={action.impact} actionId={action.actionId} />
          ))}
        </div>
      </div>
    </section>
  );
};
