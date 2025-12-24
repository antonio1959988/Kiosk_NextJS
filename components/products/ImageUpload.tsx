"use client"

import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from 'react-icons/tb'

type ImageUploadProps = {
    image?: string
}

export default function ImageUpload({ image }: ImageUploadProps) {

    const [imageUrl, setImageUrl] = useState(image)

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === "success") {
                    widget.close()
                    if ((typeof result.info == "object") && "secure_url" in result.info) {
                        setImageUrl(result.info?.secure_url)
                    }
                }
            }}
            uploadPreset="kiosk-next"
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <>
                    <div className="space-y-2">
                        <label className="text-slate-800">Imagen Producto</label>
                        <div
                            onClick={() => open()}
                            className="relative cursor-pointer hover:opacity-70 min-h-44 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
                            <TbPhotoPlus
                                size={50}
                            />
                            {imageUrl ? (
                                <div
                                    className="absolute inset-0 size-full">
                                    <Image
                                        style={{ objectFit: 'contain' }}
                                        src={getImagePath(imageUrl)}
                                        alt="Imagen de producto"
                                        fill
                                    />
                                </div>
                            ) : <p className="text-lg font-semibold">Agregar Imagen</p>}
                        </div>
                    </div>

                    <input
                        type="hidden"
                        name="image"
                        defaultValue={imageUrl}
                    />
                </>
            )}
        </CldUploadWidget>
    )
}
