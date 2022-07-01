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
            <Lang className="bottom-2pal left-pal lg:left-2pal fixed -rotate-90 z-30" />
            <Nav className={`${mainOpacity} transition rotate-90 fixed bottom-2pal right-pal lg:right-2pal z-40`} />
            <Intro className="lg:h-2pal lg:flex lg:flex-col lg:justify-center lg:left-2pal w-full fixed z-30 lg:text-left text-center" />
            <main className="z-20">
                {children}
            </main>
        </Fragment >
    )
}