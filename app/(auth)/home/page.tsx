import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-6 text-3x1 front-bold ">
        Home
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PedidoCard
          title="reparos gerais"
          description="Preciso de um profissional para fazer reparos gerais."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "reparos gerais",
            icone: "🔧"
          }}
        />
        <PedidoCard
          title="pintar parede"
          description="Preciso pintar uma parede."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "pintar parede",
            icone: "🎨"
          }}
        />
        <PedidoCard
          title="trocar chuveiro"
          description="Preciso trocar um chuveiro."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "Eletricista",
            icone: "⚡"
          }}
        />
        <PedidoCard
          title="instalação de ar condicionado"
          description="Preciso instalar um ar condicionado."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "Refrigeração",
            icone: "❄️"
          }}
        />
        <PedidoCard
          title="reparar vazamento"
          description="Preciso reparar um vazamento."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "Hidraulica",
            icone: "🚰"
          }}
        />
        <PedidoCard
          title="montar guarda-roupa"
          description="Preciso montar um guarda-roupa."
          image="/placeholder.png"
          category={{
            id: 1,
            name: "Montagem de Moveis",
            icone: "🪑"
          }}
        />

      </div>
    </div>
  );
}
