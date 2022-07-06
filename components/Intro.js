import Link from "next/link";

export default function Intro({ className = '' }) {
    return (
        <header className={`${className}`} id="intro">
            <Link href="/">
                <a className="text-orange-900 hover:text-orange-700 transition dark:text-orange-300 dark:hover:text-orange-500">
                    <h1 className="text-3xl uppercase font-bold h-2pal lg:h-auto">Antoine Bollinger</h1>
                </a>
            </Link>
        </header>
    )
}