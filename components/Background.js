import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Image from "next/image";
import bg from "../public/bg_binary.jpg";

import { techs } from "../data/techs";
import { useCallback, useEffect, useState } from "react";

export function TechsBg({ scrollActive }) {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    const handleLink = useCallback((url) => {
        const modal = document.getElementById('modal');
        modal.querySelector('.modal-title').insertAdjacentHTML('afterbegin', locales[locale].externLink.title);
        modal.querySelector('.modal-body').insertAdjacentHTML('afterbegin', locales[locale].externLink.message.replace('%s', `<strong>${url}</strong>`));
        modal.querySelector('.modal-link').dataset.href = url;
        modal.classList.remove('hidden');
    })

    return (
        <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} z-40`}>
            {['animate-infiniteXSlide', 'translate-x-full animate-infiniteXSlideDelay'].map((ele, index) => (
                <div className={`h-2pal fixed w-full bottom-0 flex justify-between items-center flex-row  ${ele}`} key={index}>
                    {techs.map((img, index) => (
                        <div className={`relative h-1/2 w-full px-2`} onClick={() => { handleLink(img.href) }} key={index}>
                            <Image
                                sizes="10vw"
                                src={img.src}
                                layout="fill"
                                objectFit='contain'
                                className="grayscale hover:grayscale-0 animate-pulse opacity-50 transition"
                                alt={img.alt}
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

export function BlocksBg({ scrollActive }) {
    return (
        <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} hidden`}>
            <div className="fixed right-[10%] top-0 w-full lg:w-1/3 h-full shadow-xl z-0 animate-slide flex flex-col justify-around items-center"></div>
            <div className="fixed left-[20%] bottom-10 w-full lg:w-1/4 h-1/2 shadow-up z-0 animate-slide flex flex-col justify-around items-center"></div>
            <div className="fixed right-[20%] top-0 w-full lg:w-1/4 h-1/2 shadow-xl z-0 animate-slideReverse flex flex-col justify-around items-center"></div>
        </div>
    )
}

export default function Background({ scrollActive }) {
    return (
        <>
            <TechsBg scrollActive={scrollActive} />
            <MainBg scrollActive={scrollActive} />
        </>
    )
}