import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import CategoryDetailsPage from "@/app/dashboard/categories/details/page";

export default function CategoryTable() {
const [selectedCategory, setSelectedCategory] =useState(false);
  
const [openEdit, setOpenEdit] = useState(false);
const [openView, setOpenView] = useState(false);

  const { t } = useTranslation();
  const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Devices and gadgets",
    products: 54,
    value: "$12,500",
    status: "Active",
    date: "2026-06-01",
  },
  {
    id: 2,
    name: "Accessories",
    description: "Phone & computer accessories",
    products: 33,
    value: "$5,400",
    status: "Active",
    date: "2026-06-02",
  },
  {
    id: 3,
    name: "Furniture",
    description: "Home and office furniture",
    products: 18,
    value: "$8,200",
    status: "Inactive",
    date: "2026-06-03",
  },
];

  return (
    <div className="overflow-x-auto">

      {/* ================= DESKTOP TABLE ================= */}
   <table className="w-full hidden md:table">
    <tbody>
  {categories.map((cat) => (
    <tr
      key={cat.id}
      className="border-t border-slate-800 hover:bg-[#1A2742]"
    >
      <td className="p-4">
        <input type="checkbox" />
      </td>

      <td className="p-4">
        <div>
          <p className="font-semibold text-white">
            {cat.name}
          </p>
        </div>
      </td>

      <td className="p-4 text-slate-400">
        {cat.description}
      </td>

      <td className="p-4 text-cyan-400">
        {cat.products}
      </td>

      <td className="p-4 text-green-400">
        {cat.value}
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            cat.status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {cat.status}
        </span>
      </td>

      <td className="p-4 text-slate-300">
        {cat.date}
      </td>

      <td className="p-4">
        <div className="flex gap-2">

      <button
  onClick={() => {
  setOpenView(true);
  }}
  className="bg-cyan-600 px-3 py-1 rounded-lg text-white"
>
  View
</button>

       <button
  onClick={() => {
    setSelectedCategory(cat);
    setOpenEdit(true);
  }}
  className="bg-indigo-600 px-3 py-1 rounded-lg"
>
  Edit
</button>

          <button className="bg-red-600 px-3 py-1 rounded-lg">
            Delete
          </button>

        </div>
      </td>
    </tr>
  ))}
</tbody>
</table>
      {/* ================= MOBILE CARDS ================= */}
   <div className="md:hidden space-y-4">

  {categories.map((cat) => (
    <div
      key={cat.id}
      className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
    >
      <div className="flex justify-between items-start">

        <div>
          <h2 className="font-bold text-white text-lg">
            {cat.name}
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            {cat.description}
          </p>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs ${
            cat.status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {cat.status}
        </span>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">

        <div>
          <p className="text-slate-500 text-xs">
            Products
          </p>

          <p className="text-white">
            {cat.products}
          </p>
        </div>

        <div>
          <p className="text-slate-500 text-xs">
            Value
          </p>

          <p className="text-green-400">
            {cat.value}
          </p>
        </div>

      </div>

      <p className="text-slate-400 text-sm mt-3">
        Created: {cat.date}
      </p>

      <div className="flex gap-2 mt-4">

      <button
  onClick={() => {

    setOpenView(true);
  }}
  className="flex-1 bg-cyan-600 py-2 rounded-xl"
>
  View
</button>

      <button
  onClick={() => {
    setSelectedCategory(cat);
    setOpenEdit(true);
  }}
  className="flex-1 bg-indigo-600 py-2 rounded-xl"
>
  Edit
</button>

        <button className="flex-1 bg-red-600 py-2 rounded-xl">
          Delete
        </button>

      </div>
    </div>
  ))}

</div>
{openEdit && selectedCategory && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-xl rounded-3xl p-6 relative">

      <button
        onClick={() => setOpenEdit(false)}
        className="absolute top-3 right-3 text-slate-400"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-white mb-4">
        Edit Category
      </h2>

      <div className="space-y-4">

        <input
          className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
          value={selectedCategory.name}
          onChange={(e) =>
            setSelectedCategory({
              ...selectedCategory,
              name: e.target.value,
            })
          }
        />

        <input
          className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
          value={selectedCategory.description}
          onChange={(e) =>
            setSelectedCategory({
              ...selectedCategory,
              description: e.target.value,
            })
          }
        />

        <div className="flex gap-3 pt-3">

          <button
            onClick={() => {
              console.log("Updated:", selectedCategory);
              setOpenEdit(false);
            }}
            className="flex-1 bg-indigo-600 p-3 rounded-xl"
          >
            Save
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
<CategoryDetailsPage open={openView} onClose={() => setOpenView(false)} />
    </div>
  );
}