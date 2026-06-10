export interface customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  purchases: string | number;
  due: string;
totalSpent?: string | number;
  delivery: "Delivery" | "Pending";
  status: "Active" | "Inactive";
}