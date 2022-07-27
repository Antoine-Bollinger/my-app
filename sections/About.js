import { useContext, useEffect } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Section from '../components/Section';
import Image from "next/image";
import CustomImage from "../components/CustomImage";

import { AddClassesToHTMLString } from "../lib/helpers";

export default function About() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <Section id="about" className="flex justify-start items-center flex-col pointer-events-none">
            <h2 className="text-orange-900 dark:text-orange-300 uppercase text-2xl font-bold mb-8">{locales[locale].about.title}</h2>
            <div className="flex flex-col lg:flex-row gap-5 mb-8 mx-auto w-full lg:w-2/3">
                <div className="w-full" dangerouslySetInnerHTML={{ __html: AddClassesToHTMLString(locales[locale].about.contentHtml, { p: "mb-4" }) }} />
            </div>
        </Section >
    )
}