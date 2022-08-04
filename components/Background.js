import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Image from "next/image";
import bg from "../public/bg_binary.jpg";
import { techs } from "../data/techs";

import { openModal } from "./Modal";

export function TechsBg({ scrollActive }) {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} z-40 hover:[animation-play-state:paused]`} id="ribbon">
            {['animate-infiniteXSlide', 'translate-x-full animate-infiniteXSlideDelay'].map((ele, index) => (
                <div className={`h-2pal fixed w-full bottom-0 flex justify-between items-center flex-row ${ele}`} key={index}>
                    {techs.map((img, index) => (
                        <div className={`relative h-1/2 w-full px-2`} onClick={() => {
                            openModal({
                                body: locales[locale].externLink.message.replace('%s', `<strong>${img.href}</strong>`),
                                header: locales[locale].externLink.title,
                                href: img.href
                            })
                        }} key={index}>
                            <Image
                                sizes="10vw"
                                src={img.src}
                                layout="fill"
                                objectFit='contain'
                                className="cursor-pointer grayscale hover:grayscale-0 animate-pulse opacity-50 dark:opacity-100 dark:invert dark:hover:invert-0 dark:hover:drop-shadow-white transition"
                                alt={img.alt}
                                title={img.href}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export function MainBg({ scrollActive }) {
    return (
        <div className={`${!scrollActive ? 'animate-fadeout' : 'animate-fadein'} fixed inset-0 z-0`}>
            <div className="opacity-10 absolute inset-0">
                <Image
                    src={bg}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale"
                    alt="Background"
                />
            </div>
        </div>
    )
}

export function BubblesBg({ scrollActive }) {
    const colors = [
        'text-gray-200 dark:text-gray-600',
        'text-gray-300 dark:text-gray-700',
        'text-gray-400 dark:text-gray-800',
    ]
    return (
        <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} bubbles opacity-50 fixed inset-0 z-0`}>
            {Array(30).fill('').map((ele, index) => {
                console.log(colors[Math.random() * colors.length | 0]);
                return (
                    <span key={index} className={colors[Math.random() * colors.length | 0]}>{ele}</span>
                )
            }
            )}
        </div>
    )
}

export function VideoBg({ scrollActive }) {
    return (
        <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} fixed inset-0 `}>
            <video autoPlay loop muted className="w-full h-full object-cover grayscale blur dark:blur-sm opacity-60 dark:opacity-30">
                <source src="/videos/1.mp4"></source>
            </video>
        </div>
    )
}

export default function Background({ scrollActive }) {
    return (
        <>
            {/* <BubblesBg scrollActive={scrollActive} /> */}
            <TechsBg scrollActive={scrollActive} />
            <MainBg scrollActive={scrollActive} />
            <VideoBg scrollActive={scrollActive} />
        </>
    )
}