import Navbar from "@/components/core/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight, Link } from "lucide-react";
import { Avatar } from "radix-ui";



export

  function DeepCleanPage() {
  return (
    <div className=" flex flex-col min-h-screen">
      {/* navebar */}
      <header className="">
        <Navbar>
          <div className=" flex  items-center gap-4">
            <span>🔍</span>
            <div className="text-blue-500">
              <span>Sing in</span>
            </div>
            <div className="bg-[#37B4FD] text-white  p-2 rounded-sm">
              <span>join as provider </span>
            </div>
          </div>
        </Navbar>
      </header>


      <div className="text-2xl font-bold">
        Deep Clean & Sanitization

      </div>


      <div className=" flex-1 grid grid-cols-1  lg:grid-cols-2
        gap-4 p-4 sm:p-6 md:p-12 lg:p-10 
        ">


        {/* main */}
<table className="pl-25 pr-25 border w-full">
    <thead>
        <tr className="bg-slate-100 dark:bg-slate-800 rounded-xl">
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Provider Proposals</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Details & Costs</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Total</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>

    <tbody className="bg-white">
        <tr className="border-b border-blue-100 bg-blue-50/30">
            <td className="text-left px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-lg">👤</div>
                    <div>
                        <p className="font-bold text-slate-900">Maria Silva</p>
                        <p className="text-xs text-slate-500">⭐⭐⭐⭐⭐4.8 (124)</p>
                    </div>
                </div>
                <span className="inline-block mt-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">ACEITE</span>
            </td>
            <td className="text-left px-4 py-4 text-sm text-slate-600">
                <p>Labor: €150.00 (6h)</p>
                <p>Equipamento: €45.00</p>
                <p className="text-xs text-green-600">Eco-supplies: €30.00</p>
            </td>
            <td className="text-left px-4 py-4">
                <p className="text-lg font-bold text-blue-700">€225.00</p>
                <span className="text-[10px] text-slate-400">VAT Included</span>
            </td>
            <td className="text-left px-4 py-4">
                <button className="bg-slate-200 text-slate-700 font-semibold rounded-xl px-4 py-2 text-sm hover:bg-slate-300 transition-all">
                    View Details
                </button>
            </td>
        </tr>

        <tr className="border-b border-slate-100">
            <td className="text-left px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-lg">🧔</div>
                    <div>
                        <p className="font-bold text-slate-900">Elite Cleaning Co.</p>
                        <p className="text-xs text-slate-500">⭐⭐⭐⭐ 4.2 (89)</p>
                    </div>
                </div>
                <span className="inline-block mt-2 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-md">PENDENTE</span>
            </td>
            <td className="text-left px-4 py-4 text-sm text-slate-600">
                <p>Flat Rate Service</p>
                <p>Travel Fee: €20.00</p>
            </td>
            <td className="text-left px-4 py-4">
                <p className="text-lg font-bold text-slate-800">€300.00</p>
            </td>
            <td className="text-left px-4 py-4">
                <button className="bg-blue-600 text-white font-semibold rounded-xl px-4 py-2 text-sm hover:bg-blue-700 shadow-sm transition-all">
                    Review Quote
                </button>
            </td>
        </tr>

        <tr className="opacity-50 grayscale bg-slate-50">
            <td className="text-left px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">🏢</div>
                    <div>
                        <p className="font-bold text-slate-700">Quick Scrub S.A.</p>
                        <p className="text-xs text-slate-400">Withdrew proposal</p>
                    </div>
                </div>
            </td>
            <td className="text-left px-4 py-4 text-sm text-slate-400 italic">
                N/A
            </td>
            <td className="text-left px-4 py-4">
                <p className="text-lg font-bold text-slate-400">€190.00</p>
            </td>
            <td className="text-left px-4 py-4 text-xs font-bold text-slate-500">
                CANCELADO
            </td>
        </tr>
    </tbody>
</table>


        {/* sidebar div */}
        <div className="bg-blue-500 py-2 rounded-xl">

        </div>
      </div>
      {/* footer */}
      <div className="sticky bottom-0 flex px-4 bg-red-500 py-2">
        zxss
      </div>

    </div>
  );
}

export default DeepCleanPage;