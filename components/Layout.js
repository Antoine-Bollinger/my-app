import { Fragment, useEffect, useState } from "react";
import MainHead from "./Head";
import Background from "./Background";
import Intro from "./Intro";
import Nav from "./Nav";
import Lang from "./Lang";
import Modal from "./Modal";
import Dark from "./Dark";

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

            <Intro className={`${mainOpacity} fixed z-40 transition w-full text-center lg:h-2pal lg:flex lg:flex-col lg:justify-center lg:left-2pal lg:text-left`} />

            <Background scrollActive={scrollActive} />

            <Lang className={`${mainOpacity} fixed z-40 transition bottom-2pal left-pal lg:left-2pal origin-bottom-left -rotate-90`} />

            <Nav className={`${mainOpacity} fixed z-40 transition bottom-2pal right-pal lg:right-2pal origin-bottom-right rotate-90`} />

            <Dark className={`${mainOpacity} fixed z-40 transition bottom-2lap left-lap lg:left-2lap origin-bottom-left rotate-90`} />

            <main className="z-20">{children}</main>

            <Modal className="z-[999]" />
        </Fragment >
    )
}