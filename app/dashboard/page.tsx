import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
         <main className="flex-1 p-2 md:p-8">
     

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Products" value="150" />
          <StatCard title="Categories" value="12" />
          <StatCard title="Suppliers" value="24" />
          <StatCard title="Today's Sales" value="$5,400" />
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Sales */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Recent Sales
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">
                      Product
                    </th>
                    <th className="text-left py-3">
                      Qty
                    </th>
                    <th className="text-left py-3">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">
                      Laptop
                    </td>
                    <td>2</td>
                    <td>$1200</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">
                      Mouse
                    </td>
                    <td>5</td>
                    <td>$100</td>
                  </tr>

                  <tr>
                    <td className="py-3">
                      Keyboard
                    </td>
                    <td>3</td>
                    <td>$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Low Stock Products
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <span>Printer Ink</span>
                <span className="text-red-500 font-bold">
                  3 Left
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Monitor</span>
                <span className="text-red-500 font-bold">
                  2 Left
                </span>
              </div>

              <div className="flex justify-between">
                <span>USB Cable</span>
                <span className="text-red-500 font-bold">
                  5 Left
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}