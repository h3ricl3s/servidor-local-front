import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <PedidoCard
        title="Pedido"
        description="Pedido"
        image="Pedido"
        category={{
           id: "1", 
           nome: "construcao civil",
            icone: "/icone-placeholder.png" }}
      />
    </div>
  );
}
