
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SalesForm from "@/components/SalesForm";
import SalesTable from "@/components/SalesTable";

export default function SalesPage() {
  return (
    <div className="flex">
 

      <main className="flex-1 p-0 bg-slate-100 min-h-screen">


        <SalesForm />

        <SalesTable />
      </main>
    </div>
  );
}