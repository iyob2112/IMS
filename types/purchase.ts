export interface Purchase {
  id: number;
  purchaseNo: string;
  supplier: string;
  date: string;
  status: "Pending" | "Completed" | "Partial";
  items: {
    product: string;
    quantity: number;
    costPrice: number;
  }[];
  total: number;
}