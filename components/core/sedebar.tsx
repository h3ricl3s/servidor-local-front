import { Wrench, Droplets, Zap, Hammer, PaintRoller, Snowflake, Star } from "lucide-react";

export default function Sedebar() {
  const categories = [
    { name: "All Services", icon: <Wrench size={20} />, active: true },
    { name: "Plumbing", icon: <Droplets size={20} />, active: false },
    { name: "Electrical", icon: <Zap size={20} />, active: false },
    { name: "Carpentry", icon: <Hammer size={20} />, active: false },
    { name: "Painting", icon: <PaintRoller size={20} />, active: false },
    { name: "HVAC", icon: <Snowflake size={20} />, active: false },
  ];

  return (
    <aside className="w-72 bg-white shadow-sm border-r border-gray-100 h-screen sticky top-16 p-6">
      {/* Título da Seção */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900">Service Categories</h3>
        <p className="text-sm text-gray-500">Browse by trade</p>
      </div>

      {/* Lista de Navegação */}
      <nav className="flex flex-col gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all
              ${category.active 
                ? "bg-blue-50 text-[#37B4FD]" 
                : "text-gray-600 hover:bg-gray-50 hover:text-[#37B4FD]"
              }`}
          >
            <span className={category.active ? "text-[#37B4FD]" : "text-gray-400"}>
              {category.icon}
            </span>
            {category.name}
          </button>
        ))}
      </nav>

      {/* Seção de Rating (Avaliação) */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Rating</h4>
        
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded border-gray-300 text-[#37B4FD] focus:ring-[#37B4FD] cursor-pointer" 
          />

          <div className="flex items-center gap-1 px-4 py-3 rounded-lg text-sm font-medium transition-all">
            {/* Gerar 5 estrelas */}
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 ml-1 font-medium">& Up</span>
          </div>
        </label>
      </div>
    </aside>
  );
}