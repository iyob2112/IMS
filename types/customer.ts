export interface customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  purchases: string;
  due: string;
  delivery: "Delivery" | "Pending";
  status: "Active" | "Inactive";
}