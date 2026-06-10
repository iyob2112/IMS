import { customer } from "@/types/customer";

export const customers: customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+251912345678",
    purchases: 12,
    totalSpent: 12500,
    delivery:"Delivery",
    due:"",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+251911111111",
    purchases: 8,
    totalSpent: 8400,
     delivery:"Delivery",
    due:"",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+251922222222",
     delivery:"Delivery",
    due:"",
    purchases: 4,
    totalSpent: 3500,
    status: "Inactive",
  },
];