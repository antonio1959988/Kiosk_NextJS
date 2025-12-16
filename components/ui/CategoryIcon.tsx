import { Category } from "@/src/generated/prisma/client"
import Image from "next/image"
import Link from "next/link"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category } : CategoryIconProps) {
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
      <Image
        src={`/icon_${category.slug}.svg`}
        alt={`Imagen de la Categoria ${category.name}`}
        width={64}
        height={64}
      />
      <Link 
        className="text-lg font-bold"
        href={`/order/${category.slug}`}>{category.name}</Link>
    </div>
  )
}
