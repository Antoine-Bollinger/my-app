import MainHead from "./Head";
import Background from "./Background";
import Intro from "./Intro";
import Nav from "./Nav";
import { Fragment, useEffect, useState } from "react";
import Lang from "./Lang";

export default function Layout({ children, title }) {
    const [mainOpacity, setMainOpacity] = useState('opacity-0');
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        setMainOpacity('opacity-100');
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > window.innerHeight / 3);
        });
    }, [])

    return (
        <Fragment>
            <MainHead title={title} />
            <Background scrollActive={scrollActive} />
            <div className="bottom-2pal left-2pal fixed -rotate-90 z-30" id="lang">
                <Lang />
            </div>
            <div className="lg:top-3pal lg:left-3pal w-full lg:w-auto fixed z-30" id="intro">
                <Intro className="mb-8 lg:text-left text-center" />
                <Nav className={`${mainOpacity} transition rotate-90 lg:rotate-0 fixed lg:static bottom-2pal right-2pal z-40`} />
            </div>
            <main className="lg:flex lg:flex-row flex-col gap-8 z-20">
                <aside className="p-3pal pr-0 opacity-0 hidden lg:block">
                    <Intro className="mb-8" />
                    <Nav className={`${mainOpacity} mb-8`} />
                </aside>
                <article className={`${mainOpacity} transition h-full lg:flex-1`}>
                    {children}
                </article>
            </main>
        </Fragment >
    )
}