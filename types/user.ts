export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Cashier" | "Storekeeper";
  status: "Active" | "Inactive";
}