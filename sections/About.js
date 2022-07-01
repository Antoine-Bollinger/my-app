import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Section from "../components/Section";
import Image from "next/image"
import me from "../public/me.jpg";
import metwo from "../public/metwo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export function meImage(img) {
    return (
        <Image
            priority
            src={img}
            height={img.height}
            width={img.width}
            layout="responsive"
            alt="Me"
        />
    )
}

export default function About() {
    const [locales, setLocales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <Section id="about" className="flex flex-col lg:flex-row justify-end items-stretch">
            <div className="w-full flex items-start justify-start">
                <div className="w-full lg:w-1/2 relative before:bg-orange-600 before:top-pal" id="identity">
                    <Image
                        priority
                        src={metwo}
                        height={metwo.height}
                        width={metwo.width}
                        layout="responsive"
                        alt="Me"
                    />
                </div>
            </div>
            <div className="w-full h-full flex items-end">
                <div className="w-full flex justify-end items-stretch text-xl gap-4">
                    <div className="lg:w-1/3 text-end font-bold" dangerouslySetInnerHTML={{ __html: locales[locale].about.contentHtml }} />
                    <div>
                        <div className="h-full flex flex-col justify-between text-3xl">
                            <a href="https://github.com/antoinebollinger" title="GitHub" className="text-orange-900 hover:text-orange-700 transition">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/antoinebollinger/" title="LinkedIn" className="text-orange-900 hover:text-orange-700 transition">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={`/documents/${locales[locale].resume}`} title="Download" className="text-orange-900 hover:text-orange-700 transition">
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section >
    )
}