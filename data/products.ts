import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZjBJVg763CaQGgz6k2TQWMGkng148x1YZQ&s",
    sku: "LAP-001",
    name: "Gaming Laptop",
    category: "Electronics",
    purchasePrice: 900,
    sellingPrice: 1200,
    stock: 25,
  },
  {
    id: 2,
    image: "https://png.pngtree.com/png-clipart/20241120/original/pngtree-a-realistic-black-mouse-png-image_17269470.png",
    sku: "MOU-001",
    name: "Wireless Mouse",
    category: "Accessories",
    purchasePrice: 10,
    sellingPrice: 25,
    stock: 5,
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn5obMfGxjQwcs2QBX9aH2Bsg534tjKl14w&s",
    sku: "KEY-001",
    name: "Mechanical Keyboard",
    category: "Accessories",
    purchasePrice: 40,
    sellingPrice: 80,
    stock: 0,
  },
];