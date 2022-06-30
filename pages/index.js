import Layout from "../components/Layout";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

import { LocalesContext } from "../lib/context";
import { getIntro, getLocales } from "../lib/locales";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrayToObject } from "../lib/helpers";

export async function getServerSideProps(context) {
    const locales = await getLocales();
    const all = await Promise.all(Object.keys(locales).map(async (locale) => {
        const about = await getIntro(locale);
        return {
            locale: locale,
            ...locales[locale],
            about: {
                ...locales[locale].about,
                ...about
            }
        }
    }));
    const data = ArrayToObject(all, 'locale');
    return {
        props: {
            data
        },
    };
}

export default function Index({ data }) {
    const [title, setTitle] = useState('');
    const [locales, setLocales] = useState(data);
    const { locale } = useRouter();

    useEffect(() => {
        const test = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('animate-fadeout');
                    entry.target.classList.add('animate-fadein');
                    if (!entry) return;
                    setTitle(locales[locale][entry.target.id].title);
                } else {
                    entry.target.classList.add('animate-fadeout');
                    entry.target.classList.remove('animate-fadein');
                }
            });
        }

        const sectionObserver = new IntersectionObserver(test, { root: null, threshold: 0.5 });
        document.querySelectorAll('section')?.forEach(section => sectionObserver.observe(section));
    })

    return (
        <LocalesContext.Provider value={[locales, setLocales]}>
            <Layout title={title}>
                <About />
                <Projects />
                <Contact />
            </Layout>
        </LocalesContext.Provider>
    )
}
