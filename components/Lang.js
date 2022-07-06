import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LocalesContext } from "../lib/context";

export default function Lang({ className }) {
    const [locales, setLocales] = useContext(LocalesContext);
    const { locale, pathname } = useRouter();

    return (
        <nav className={className} id="lang">
            <ul className="flex">
                {Object.keys(locales).map((ele, index) => (
                    <li key={index}>
                        <Link href={pathname} locale={ele} replace >
                            <a className={`${locale === ele
                                ? 'text-orange-500 pointer-events-none active'
                                : 'text-orange-900 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-500'
                                } transition pr-4 uppercase`}>
                                {locales[ele].lang}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul >
        </nav>
    )
}