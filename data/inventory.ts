import { InventoryItem } from "@/types/inventory";

export const inventory: InventoryItem[] = [
  {
    id: 1,
    product: "Laptop",
    sku: "LP-001",
    warehouse: "Main Warehouse",
    quantity: 45,
    price: 1200,
    status: "In Stock",
  },
  {
    id: 2,
    product: "Keyboard",
    sku: "KB-002",
    warehouse: "Main Warehouse",
    quantity: 5,
    price: 80,
    status: "Low Stock",
  },
  {
    id: 3,
    product: "Monitor",
    sku: "MN-003",
    warehouse: "Branch A",
    quantity: 0,
    price: 350,
    status: "Out of Stock",
  },
  {
    id: 4,
    product: "Mouse",
    sku: "MS-004",
    warehouse: "Branch A",
    quantity: 65,
    price: 25,
    status: "In Stock",
  },
];