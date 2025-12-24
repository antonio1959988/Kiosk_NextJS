"use client"

import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
//import { prisma } from "@/src/lib/prisma";
//import { revalidatePath } from "next/cache";
import { OrderWithProducts } from "@/src/types";
import useSWR from 'swr'

/*

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })

    return orders;
}

*/

export default function OrdersPage() {



    const url = '/admin/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)

    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 15000,
        revalidateOnFocus: false
    })

    if (error) {
        console.log("Error", error)
    }
    if (isLoading) return <p>Cargando...</p>



    // const orders = await getPendingOrders();

    return (
        <>
            <Heading>Administrar Ordenes</Heading>

            {/*
            
            <form action={refreshOrders}>
                <input
                    value="Actualizar Ordenes"
                    type="submit"
                    className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
                />
            </form>
            
            */}

            {data?.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
                    {data.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            ) : (
                <p className="text-center">No hay ordenes Pendientes</p>
            )}
        </>
    )
}
