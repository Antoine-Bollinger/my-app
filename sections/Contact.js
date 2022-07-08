import { useContext } from "react";
import { LocalesContext } from "../lib/context";
import { useRouter } from "next/router";

import Section from "../components/Section";
import Form from "../components/Form";

import Identity from "../components/Identity";

export default function Contact() {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <Section id="contact" className="flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="w-full h-full flex items-end justify-end hidden lg:flex">
                <Identity className="w-full lg:w-1/2 relative" text1="Copyright © 2022" text2="antoinebollinger.fr" />
            </div>
            <div className="w-full h-full flex flex-col justify-center">
                <h2 className="text-orange-900 dark:text-orange-300 uppercase text-2xl font-bold mb-8 text-center">{locales[locale].contact.title}</h2>
                <Form />
            </div>
        </Section >
    )
}