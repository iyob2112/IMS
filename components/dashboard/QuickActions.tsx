"use client";

import Link from "next/link";
import AddProductModal from "../AddProductModal";
import { useState } from "react";
import AddPurchaseModal from "../purchases/AddPurchaseModal";

export default function QuickActions() {
    const [openProduct, setOpenProduct] = useState(false);
    const [openPurchase, setOpenPurchase] = useState(false);
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
        
            onClick={() => setOpenProduct(true)}
          className="bg-cyan-600 p-4 rounded-xl text-center text-white"
        >
          Add Product
        </button>

        <Link
          href="/dashboard/pos"
          className="bg-green-600 p-4 rounded-xl text-center text-white"
        >
          New Sale
        </Link>

        <button
         onClick={() => setOpenPurchase(true)}
          className="bg-purple-600 p-4 rounded-xl text-center text-white"
        >
        Add Purchase
        </button>

        <Link
          href="/dashboard/sales/customers"
          className="bg-orange-600 p-4 rounded-xl text-center text-white"
        >
          Customer
        </Link>

      </div>
        <AddProductModal
              isOpen={openProduct}
              onClose={() => setOpenProduct(false)}
            />
            
                  <AddPurchaseModal
                    open={openPurchase}
                    onClose={() => setOpenPurchase(false)}
                  />
            
    </div>
  );
}