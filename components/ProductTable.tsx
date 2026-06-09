"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Barcode } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/types/product";
import ProductDetailsPage from "@/app/dashboard/products/[id]/page";
export default function ProductTable() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetailsPage, setOpenDetailsPage] = useState(false);

  return (
    <div className="w-full">

      {/* ================= MOBILE CARDS ================= */}
      <div className="grid gap-4 md:hidden">

        {products.map((product) => {
          const status =
            product.stock === 0
              ? "Out Of Stock"
              : product.stock < 10
                ? "Low Stock"
                : "In Stock";

          return (
            <div
              key={product.id}
              className="bg-[#131C31] rounded-2xl p-4 border border-slate-800"
            >

              {/* Top */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />

                  <div>
                    <p className="text-white font-semibold">
                      {product.name}
                    </p>

                    <p className="text-slate-400 text-sm">
                      {product.category}
                    </p>
                  </div>

                </div>

                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => toggleSelect(product.id)}
                />
              </div>

              {/* Info */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <p className="text-slate-400">
                  SKU:{" "}
                  <span className="text-cyan-400">
                    {product.sku}
                  </span>
                </p>

                <p className="text-slate-400">
                  Stock:{" "}
                  <span className="text-white">
                    {product.stock}
                  </span>
                </p>

                <p className="text-slate-400">
                  Cost:{" "}
                  <span className="text-white">
                    ${product.purchasePrice}
                  </span>
                </p>

                <p className="text-slate-400">
                  Price:{" "}
                  <span className="text-green-400">
                    ${product.sellingPrice}
                  </span>
                </p>
              </div>

              {/* Status */}
              <div className="mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${status === "In Stock"
                      ? "bg-green-500/20 text-green-400"
                      : status === "Low Stock"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                >
                  {status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4  ">

                <button
                  onClick={() => {
                    setOpenDetailsPage(true);
                  }}
                  className="bg-slate-800 p-2 rounded-lg"
                >
                  <Eye size={16} />
                </button>

                <button
                  onClick={() => {
                    setOpenEdit(true);

                    setSelectedProduct(product);
                  }}
                  className="bg-slate-800 p-2 rounded-lg"
                >
                  <Pencil size={16} />
                </button>



                <button className="bg-red-500/20 text-red-400 p-2 rounded-lg ">
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          );
        })}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-4">
                  <input type="checkbox" />
                </th>

                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">SKU</th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Cost</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => {
                const status =
                  product.stock === 0
                    ? "Out Of Stock"
                    : product.stock < 10
                      ? "Low Stock"
                      : "In Stock";

                return (
                  <tr
                    key={product.id}
                    className="border-b border-slate-800 hover:bg-[#0B1120]"
                  >

                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(product.id)}
                        onChange={() => toggleSelect(product.id)}
                      />
                    </td>

                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </td>

                    <td className="p-4 text-cyan-400">
                      {product.sku}
                    </td>

                    <td className="p-4 text-white">
                      {product.name}
                    </td>

                    <td className="p-4 text-slate-300">
                      {product.category}
                    </td>

                    <td className="p-4">
                      ${product.purchasePrice}
                    </td>

                    <td className="p-4 text-green-400">
                      ${product.sellingPrice}
                    </td>

                    <td className="p-4">
                      {product.stock}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${status === "In Stock"
                            ? "bg-green-500/20 text-green-400"
                            : status === "Low Stock"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="p-4 ">
                      <div className="flex gap-2">

                        <button
                          onClick={() => {
                            setOpenDetailsPage(true);
                          }}
                          className="bg-slate-800 p-2 rounded-lg"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          onClick={() => {
                            setOpenEdit(true);

                            setSelectedProduct(product);
                          }}
                          className="bg-slate-800 p-2 rounded-lg"
                        >
                          <Pencil size={16} />
                        </button>





                        <button className="bg-red-500/20 text-red-400 p-2 rounded-lg">
                          <Trash2 size={16} />
                        </button>

                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

      </div>
          {openEdit && selectedProduct && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

              <div className="bg-[#131C31] w-full max-w-2xl rounded-3xl p-6 border border-slate-700">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Edit Product
                  </h2>

                  <button
                    onClick={() => setOpenEdit(false)}
                    className="text-slate-400"
                  >
                    ✕
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-4">

                  <input
                    className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                    value={selectedProduct.name}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        name: e.target.value,
                      })
                    }
                    placeholder="Product Name"
                  />

                  <input
                    className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                    value={selectedProduct.sku}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        sku: e.target.value,
                      })
                    }
                    placeholder="SKU"
                  />

                  <input
                    type="number"
                    className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                    value={selectedProduct.stock}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        stock: Number(e.target.value),
                      })
                    }
                    placeholder="Stock"
                  />

                  <input
                    type="number"
                    className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                    value={selectedProduct.sellingPrice}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        sellingPrice: Number(e.target.value),
                      })
                    }
                    placeholder="Selling Price"
                  />

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">

                    <button
                      onClick={() => {
                        console.log("Updated Product:", selectedProduct);
                        setOpenEdit(false);
                      }}
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl"
                    >
                      Save Changes
                    </button>

                    <button
                      onClick={() => setOpenEdit(false)}
                      className="flex-1 bg-slate-800 p-3 rounded-xl"
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              </div>
            </div>
          )}

      <ProductDetailsPage
        open={openDetailsPage}
        onClose={() => setOpenDetailsPage(false)}
      />
    </div>
  );
}