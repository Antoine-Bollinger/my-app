import Image from "next/image";
import me from "../public/me.jpg";
import metwo from "../public/metwo.jpg";

import { useRouter } from "next/router";
import { useContext } from "react";
import { LocalesContext } from "../lib/context";

import Typewriter from 'typewriter-effect';

export function test() {
    console.log('test');
}

export default function Identity({ className, id = 'me' }) {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const img = id === 'me' ? me : metwo;
    return (
        <div className={`
            mr-pal mb-pal before:bg-orange-600 
            before:top-pal before:left-pal before:absolute before:w-full before:h-full ${className}`} onClick={test}>
            <Image
                priority
                src={img}
                height={img.height}
                width={img.width}
                layout="responsive"
                alt="Antoine Bollinger"
                placeholder="blur"
            />
            <div className="absolute left-pal top-full w-full h-pal text-white text-center leading-pal">
                {<Typewriter
                    options={{
                        strings: ['console.log("Hello world!");', '<?= "Hello world!"; ?>'],
                        autoStart: true,
                        loop: true,
                        delay: '100'
                    }}
                />}
            </div>
            <div className="absolute left-0 top-pal w-full h-pal text-white text-center leading-pal origin-top-right -rotate-90">
                {<Typewriter
                    options={{
                        strings: [locales[locale].intro],
                        autoStart: true,
                        loop: true,
                        delay: '125'
                    }}
                />}
            </div>
        </div>
    )
}