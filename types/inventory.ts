export interface InventoryItem {
  id: number;
  product: string;
  sku: string;
  warehouse: string;
  quantity: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}