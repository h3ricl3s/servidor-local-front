import Navbar from "@/components/core/navbar";
import Footer from "@/components/core/footer";
import Link from "next/link";
import { SearchIcon } from "@/assets/icons/search";

export function BudgetPage() {
    return (
        <div className="bg-[#f6f7f8] text-[#0f172a] min-h-screen flex flex-col">

            <header>
                <Navbar>
                    <div className="flex items-center gap-4">
                        <SearchIcon />
                        <div className="text-[#13a4ec] font-semibold p-2 rounded-sm">
                            <Link href="/registro">Sign in</Link>
                        </div>
                        <div className="bg-[#13a4ec] text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Join as Provider
                        </div>
                    </div>
                </Navbar>
            </header>

            
            <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 py-10 md:px-12 flex flex-col gap-10">

            
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-2">
                            Deep Clean & Sanitization
                        </h1>
                        <p className="text-[#475569] text-base">
                            Requested on October 12, 2024 for a 4-bedroom residential property in Downtown.
                        </p>
                    </div>
                    <div className="bg-[#f8fafc] px-6 py-4 rounded-xl flex flex-col items-end border border-slate-200/60 shrink-0">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-[#475569] mb-1">
                            Total Estimated Value
                        </span>
                        <div className="text-3xl font-extrabold text-[#0f172a]">€450.00</div>
                        <span className="text-xs text-[#13a4ec] font-medium mt-1">Pending Approval</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    <div className="lg:col-span-8 flex flex-col gap-8">

                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">

                            <div className="px-8 py-5 bg-[#f8fafc] border-b border-slate-200/50 flex justify-between items-center">
                                <h2 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                                    <span className="text-[#13a4ec]">📋</span>
                                    Provider Proposals
                                </h2>
                                <span className="bg-[#d6effd] text-[#001e30] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    3 Received
                                </span>
                            </div>

                            <div className="p-6 flex flex-col gap-4">

                                <div className="bg-white rounded-xl border-2 border-[#13a4ec] p-5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-[#13a4ec] text-white px-3 py-1 rounded-bl-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        ✓ Aceite
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex items-center gap-4 min-w-[180px]">
                                            <div className="w-14 h-14 rounded-full bg-[#d6effd] border-2 border-[#d6effd] overflow-hidden flex items-center justify-center text-2xl">
                                                👤
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#0f172a] text-sm">Maria Silva</p>
                                                <div className="flex items-center gap-0.5 text-[#f59e0b] text-xs mt-0.5">
                                                    ★★★★★
                                                    <span className="text-[#475569] ml-1 font-medium">4.8 (124)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow flex flex-col sm:flex-row gap-6 justify-between border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 w-full">
                                            <div className="space-y-1.5 flex-grow text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-[#475569]">Labor (6h x €25/h)</span>
                                                    <span className="font-medium text-[#0f172a]">€150.00</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#475569]">Specialized Equipment</span>
                                                    <span className="font-medium text-[#0f172a]">€45.00</span>
                                                </div>
                                                <div className="flex justify-between ">
                                                    <span className="text-[#475569]">Eco-friendly Supplies</span>
                                                    <span className="font-medium">€30.00</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end justify-center min-w-[100px]">
                                                <span className="text-2xl font-bold text-[#13a4ec]">€225.00</span>
                                                <span className="text-xs text-[#475569] mt-1">Includes VAT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border border-slate-200 p-5 relative">
                                    <div className="absolute top-0 right-0 bg-[#fef3c7] text-[#92400e] px-3 py-1 rounded-bl-lg rounded-tr-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        ⏱ Pendente
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex items-center gap-4 min-w-[180px]">
                                            <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center text-2xl">
                                                🧔
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#0f172a] text-sm">Elite Cleaning Co.</p>
                                                <div className="flex items-center gap-0.5 text-[#f59e0b] text-xs mt-0.5">
                                                    ★★★★☆
                                                    <span className="text-[#475569] ml-1 font-medium">4.2 (89)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow flex flex-col sm:flex-row gap-6 justify-between border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 w-full opacity-80">
                                            <div className="space-y-1.5 flex-grow text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-[#475569]">Flat Rate Service</span>
                                                    <span className="font-medium text-[#0f172a]">€280.00</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#475569]">Travel Fee</span>
                                                    <span className="font-medium text-[#0f172a]">€20.00</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end justify-center min-w-[100px]">
                                                <span className="text-xl font-bold text-[#0f172a]">€300.00</span>
                                                <button className="mt-1 text-[#13a4ec] font-medium text-sm hover:underline">Review</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#f8fafc] rounded-xl border border-slate-200 p-5 relative opacity-60">
                                    <div className="absolute top-0 right-0 bg-[#cbd5e1] text-[#475569] px-3 py-1 rounded-bl-lg rounded-tr-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        ✕ Cancelado
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex items-center gap-4 min-w-[180px]">
                                            <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-[#475569]">
                                                🏢
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#475569] text-sm">Quick Scrub S.A.</p>
                                                <span className="text-xs text-[#475569] block mt-1">Withdrew proposal</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow flex items-center justify-end w-full md:w-auto mt-4 md:mt-0">
                                            <span className="text-base font-medium text-[#475569] line-through">€190.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        

                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 p-6 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#13a4ec] to-[#cae6ff]"></div>

                            <h3 className="text-base font-bold text-[#0f172a] mb-4">Action Required</h3>
                            <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                                You have selected the proposal from{" "}
                                <strong className="text-[#0f172a]">Maria Silva</strong>.{" "}
                                Review the final terms and accept to finalize the service contract.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#475569]">Subtotal</span>
                                    <span className="font-medium text-[#0f172a]">€225.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#475569]">Platform Fee (5%)</span>
                                    <span className="font-medium text-[#0f172a]">€11.25</span>
                                </div>
                                <div className="h-px w-full bg-slate-200 my-1"></div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-[#0f172a]">Total Due</span>
                                    <span className="text-xl font-extrabold text-[#13a4ec]">€236.25</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#13a4ec] text-white py-3.5 rounded-lg font-bold shadow-sm hover:bg-sky-500 active:scale-95 transition-all flex items-center justify-center gap-2 mb-3">
                                🤝 Accept & Pay Securely
                            </button>
                            <button className="w-full bg-slate-100 text-[#475569] py-3 rounded-lg font-medium text-sm hover:bg-slate-200 active:scale-95 transition-colors">
                                Request Modifications
                            </button>
                        </div>

                        <div className="bg-[#d6effd]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#13a4ec]/10 flex items-start gap-4">
                            <span className="text-[#13a4ec] text-2xl shrink-0">💬</span>
                            <div>
                                <h4 className="font-bold text-[#001e30] text-sm mb-1">Need help deciding?</h4>
                                <p className="text-xs text-[#001e30]/70 mb-3">
                                    Our concierge team is available to help you evaluate these proposals.
                                </p>
                                <a className="text-xs font-bold text-[#13a4ec] hover:underline uppercase tracking-wide" href="#">
                                    Contact Concierge
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <footer />
        </div>
    );
}

export default BudgetPage;