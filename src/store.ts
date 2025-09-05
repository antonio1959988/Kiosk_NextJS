import { create } from 'zustand'
import { OrderItem } from './types'
import { Product } from '@/prisma/generated/prisma'

interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
}

export const useStore = create<Store>((set) => ({
    order: [],
    addToOrder: (product) => {
        set((state) => ({
            order: [...state.order, {
                ...product, 
                subtotal: 1 * product.price, 
                quantity: 1}]
        }))
    }
}))