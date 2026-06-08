import { User } from "@/types/user";

export const users: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@shop.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Manager User",
    email: "manager@shop.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Cashier User",
    email: "cashier@shop.com",
    role: "Cashier",
    status: "Inactive",
  },
];