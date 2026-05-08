import { BellIcon, Link } from "lucide-react";

export default function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
       <nav className="stricky top-0 z-10 w-full bg-white sadow-sm p-4">
         <div className="flex justify-between items-center h-16 px-6">
           <div className="flex items-center gap-10">
             <span className="flex gap-10 font-semibold ">Azure Meridian </span>

             <div className="flex gap-10 font-semibold"> 
               <Link className="" href="/">Find Post</Link>
               <Link href="#">Services</Link>
               <Link href="#">Projects</Link>
               <Link href="#">Support</Link>
             </div>
           </div>

           <div className="flex items-center grap-4">
             <div className="relative hidden sm:block group">
               <input 
               className="w-64 h-12 pl-11 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-blue-500 transitio-all"
               placeholder="Search services..."
               type="text"/>
             </div>

             <div className="p-2 hover:bg-slate-50 rounded-full transition-all active:scale-95">
               <Link href="#">
               <BellIcon />
               </Link>
            </div>
            <div>
              {children}
            </div>

        
           </div>

         </div>
    
   </nav>
    );
}