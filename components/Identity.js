import Image from "next/image";
import me from "../public/me.jpg";
import metwo from "../public/metwo.jpg";

export default function Identity({ className = '', id = 'me', text1 = '', text2 = '' }) {
    const img = id === 'me' ? me : metwo;

    return (
        <div className={`
            mr-pal mb-pal before:bg-orange-600 
            before:top-pal before:left-pal before:absolute before:w-full before:h-full ${className}`}>
            <Image
                priority
                src={img}
                height={img.height}
                width={img.width}
                layout="responsive"
                alt="Antoine Bollinger"
                placeholder="blur"
            />
            <div className="absolute left-pal top-full w-full h-pal text-white text-center leading-pal">{text1}</div>
            <div className="absolute left-0 top-pal w-full h-pal text-white text-center leading-pal origin-top-right -rotate-90">{text2}</div>
        </div>
    )
}