"use client"
import { SearchSchema } from "@/src/schema"
import { redirect, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function ProductSearchForm() {

        const router = useRouter()

    const handlleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }

        const result = SearchSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(e => toast.error(e.message))
            return;
        }
        router.push(`/admin/products/search?text=${result.data.search}`)        
    }


    return (
        <form
            action={handlleSearchForm}
            className="flex items-center">
            <input
                type="text"
                name="search"
                placeholder="Buscar Producto"
                className="p-2 placeholder-gray-400 w-full" />
            <input
                type="submit"
                value="Buscar"
                className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
            />
        </form>
    )
}
