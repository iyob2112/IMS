import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex ">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* THIS makes mobile sidebar available everywhere */}
        <MobileSidebar />

        <div className="p-3 bg-[#0B1120]">

          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}