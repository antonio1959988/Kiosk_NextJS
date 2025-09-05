"use client";
import { Category } from "@/prisma/generated/prisma"
import Link from "next/link"
import Image from "next/image"

import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {

    const params = useParams();

    return (
        <div className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex relative items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
            <Image
                width={64}
                height={64}
                className="w-full h-auto max-w-16"
                src={`/icon_${category.slug}.svg`}
                alt="Imagen Categoría" 
            />

            <Link 
                href={`/orden/${category.slug}`}
                className="text-xl font-bold before:absolute before:inset-0">
                {category.name}
            </Link>
        </div>
    )
}
