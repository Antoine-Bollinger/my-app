import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LocalesContext } from "../lib/context";

export default function Legal({ className }) {
    const [locales] = useContext(LocalesContext);
    const { locale } = useRouter();

    return (
        <nav className={className} id="legal">
            <ul className="flex">
                <li>
                    <Link href="/legal" >
                        <a className="whitespace-nowrap text-orange-900 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-500 transition uppercase">
                            {locales[locale].legal.title}
                        </a>
                    </Link>
                </li>
            </ul >
        </nav>
    )
}