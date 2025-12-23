import { Order, Product } from "@/src/generated/prisma/client";
import { OrderProducts } from "../generated/prisma/browser";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number;
    subtotal: number
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}