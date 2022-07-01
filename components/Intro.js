import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LocalesContext } from "../lib/context";

export default function Intro({ className = '' }) {
    const [locales, setLocales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <header className={`${className}`} id="intro">
            <Link href="/">
                <a className="text-orange-900 hover:text-orange-700 transition">
                    <h1 className="text-3xl uppercase font-bold h-2pal lg:h-auto">Antoine Bollinger</h1>
                </a>
            </Link>
            <p>{`<${locales[locale].intro} />`}</p>
        </header>
    )
}