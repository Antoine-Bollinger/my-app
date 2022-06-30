import MainHead from "../components/Head";
import { getLocales } from "../lib/locales";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import me from "../public/me.jpg";
import Image from "next/image";

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
    const [locales, setLocales] = useState(data[locale].error);
    console.log(locales);

    useEffect(() => {
        setSiteUrl(window.location.origin);
    });

    return (
        <>
            <MainHead title={locales.title} />
            <main className="w-full h-full p-3pal flex flex-col lg:flex-row items-center justify-center gap-8">
                <a href={siteUrl} className="text-orange-900 hover:text-orange-700 transition">
                    <h1 className="fixed text-center lg:text-left top-0 left-0 right-0 lg:top-pal w-full lg:left-2pal text-3xl uppercase font-bold h-2pal lg:h-auto z-40">Antoine Bollinger</h1>
                </a>
                <section className="w-full lg:w-1/3 relative h-1/3 lg:h-full">
                    <Image
                        src={me}
                        layout="fill"
                        objectFit="contain"
                        alt="Me"
                    />
                </section>
                <section>
                    <h1 className="text-3xl mb-8">404 | {locales.error}</h1>
                    <a href={siteUrl}>{locales.link}</a>
                </section>
            </main>
        </>
    )
}