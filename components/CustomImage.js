import Image from "next/image";

export default function CustomImage(imageProps) {
    return (
        <div className="relative mr-2 mb-2 before:bg-orange-600 before:top-2 before:left-2 before:absolute before:w-full before:h-full">
            <Image {...imageProps} alt="Image" />
        </div >
    )
}