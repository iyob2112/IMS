export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  purchases: number;
  totalSpent: number;
  status: "Active" | "Inactive";
}