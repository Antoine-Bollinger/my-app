import Image from "next/image";
import bg from "../public/bg_binary.jpg";

import mongodb from "../public/backend/mongoDB.png";
import mysql from "../public/backend/mysql.png";
import node from "../public/backend/node.png";
import nextjs from "../public/frontend/nextjs.svg";
import react from "../public/frontend/react.png";
import vue from "../public/frontend/vue.png";
import php from "../public/language/php.jpg";
import javascript from "../public/language/js.png";

const back = [{ src: mongodb, alt: 'Mongo DB' }, { src: mysql, alt: 'MySQL' }, { src: node, alt: "Node.js" }];
const front = [{ src: nextjs, alt: 'Next.js' }, { src: react, alt: 'React' }, { src: vue, alt: "Vue.js" }];
const language = [{ src: php, alt: 'PHP' }, { src: javascript, alt: 'Javascript' }];
const all = [...back, ...front, ...language];

export default function Background({ scrollActive }) {
    return (
        <>
            <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} z-40`}>
                {['animate-infiniteXSlide', 'translate-x-full animate-infiniteXSlideDelay'].map((ele, index) => (
                    <div className={`h-2pal fixed w-full lg:top-0 bottom-0 flex justify-between items-center flex-row ${ele}`} key={index}>
                        {all.map((img, index) => (
                            <div className="relative h-1/2 w-full px-2" key={index} >
                                <Image
                                    src={img.src}
                                    layout="fill"
                                    objectFit='contain'
                                    className="grayscale hover:grayscale-0 animate-pulse opacity-50"
                                    alt={img.alt}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={`${scrollActive ? 'animate-fadeout' : 'animate-fadein'} hidden lg:block`}>
                <div className="fixed right-[10%] top-0 w-full lg:w-1/3 h-full shadow-xl z-0 animate-slide flex flex-col justify-around items-center"></div>
                <div className="fixed left-[20%] bottom-10 w-full lg:w-1/4 h-1/2 shadow-up z-0 animate-slide flex flex-col justify-around items-center"></div>
                <div className="fixed right-[20%] top-0 w-full lg:w-1/4 h-1/2 shadow-xl z-0 animate-slideReverse flex flex-col justify-around items-center"></div>
            </div>

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
        </>
    )
}