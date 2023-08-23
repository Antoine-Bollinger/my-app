import MainHead from "../components/Head";
import { getLocales } from "../lib/locales";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Identity from "../components/Identity";

export async function getStaticProps(context) {
    const data = await getLocales();
    return {
        props: {
            data
        },
    };
}

export default function FourOhFour({ data }) {
    const [siteUrl, setSiteUrl] = useState('');
    const { locale } = useRouter();
    const [locales, setLocales] = useState(data[locale === 'default' ? 'en' : locale].error);

    useEffect(() => {
        setSiteUrl(window.location.origin);
    }, []);

    return (
        <>
            <MainHead title={locales.title} />
            <main className="w-full h-full p-3pal flex flex-col lg:flex-row items-center justify-center gap-8">
                <a href={siteUrl} className="text-orange-900 hover:text-orange-700 transition">
                    <h1 className="fixed text-center lg:text-left top-0 left-0 right-0 lg:top-pal w-full lg:left-2pal text-3xl uppercase font-bold h-2pal lg:h-auto z-40">Antoine Bollinger</h1>
                </a>
                <section className="w-full lg:w-1/3 h-1/3 lg:h-full flex items-center justify-center">
                    <Identity className="w-full relative" text1="Copyright © 2022" text2="antoinebollinger.fr" />
                </section>
                <section>
                    <h1 className="text-3xl mb-8">404 | {locales.error}</h1>
                    <a href={siteUrl}>{locales.link}</a>
                </section>
            </main>
        </>
    )
}