import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Section from "../components/Section";
import Identity from "../components/Identity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import Typewriter from 'typewriter-effect';

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

export default function Home() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <Section id="home" className="flex flex-col lg:flex-row justify-end items-stretch">
            <div className="w-full flex items-start justify-start">
                <Identity
                    className="w-full lg:w-1/2 relative"
                    id="metwo"
                    text1={<Typewriter
                        options={{
                            strings: ['console.log("Hello world!");', '<?= "Hello world!"; ?>'],
                            autoStart: true,
                            loop: true,
                            delay: '100'
                        }}
                    />}
                    text2={<Typewriter
                        options={{
                            strings: [locales[locale].intro],
                            autoStart: true,
                            loop: true,
                            delay: '125'
                        }}
                    />}
                />
            </div>
            <div className="w-full h-full flex items-end">
                <div className="w-full flex justify-end items-stretch text-lg lg:text-xl gap-4">
                    <div className="lg:w-1/2 text-end font-bold" dangerouslySetInnerHTML={{ __html: locales[locale].home.contentHtml }} />
                    <div>
                        <div className="h-full flex flex-col justify-between text-3xl">
                            <a href="https://github.com/antoinebollinger" title={locales[locale].home.github} className="text-orange-900 hover:text-orange-700  dark:text-orange-300 dark:hover:text-orange-500 transition">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/antoinebollinger/" title={locales[locale].home.linkedin} className="text-orange-900 hover:text-orange-700  dark:text-orange-300 dark:hover:text-orange-500 transition">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={`/documents/${locales[locale].resume}`} title={locales[locale].home.resume} className="text-orange-900 hover:text-orange-700  dark:text-orange-300 dark:hover:text-orange-500 transition">
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section >
    )
}