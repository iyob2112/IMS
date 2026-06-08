import { Purchase } from "@/types/purchase";

export const purchases: Purchase[] = [
  {
    id: 1,
    purchaseNo: "PO-1001",
    supplier: "Tech Supplier Ltd",
    date: "2026-06-01",
    status: "Completed",
    items: [
      { product: "Laptop", quantity: 2, costPrice: 1000 },
      { product: "Mouse", quantity: 10, costPrice: 50 },
    ],
    total: 2500,
  },
  {
    id: 2,
    purchaseNo: "PO-1002",
    supplier: "Office Supply Co",
    date: "2026-06-03",
    status: "Pending",
    items: [
      { product: "Printer Paper", quantity: 20, costPrice: 30 },
      { product: "Pens", quantity: 50, costPrice: 5 },
    ],
    total: 1400,
  },
  {
    id: 3,
    purchaseNo: "PO-1003",
    supplier: "Computer World",
    date: "2026-06-05",
    status: "Completed",
    items: [
      { product: "Monitor", quantity: 4, costPrice: 300 },
      { product: "Keyboard", quantity: 10, costPrice: 20 },
    ],
    total: 3200,
  },
];