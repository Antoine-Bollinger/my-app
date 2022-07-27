import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";


export const Thumb = ({ selected, onClick, imgSrc }) => (
    <div className={`embla__slide embla__slide--thumb  ${selected ? "is-selected" : ""} h-full`}>
        <button
            onClick={onClick}
            className="embla__slide__inner embla__slide__inner--thumb h-full"
            type="button"
        >
            <Image
                priority
                className="embla__slide__thumbnail grayscale"
                src={imgSrc.src}
                // height={imgSrc.src.heigt}
                // width={imgSrc.src.width}
                alt={imgSrc.title}
                layout="fill"
                objectFit="cover"
            />
        </button>
    </div>
);

const EmblaCarousel = ({ slides }) => {
    const { locale } = useRouter();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        selectedClass: "",
        dragFree: true
    });

    const onThumbClick = useCallback((index) => {
        if (!embla || !emblaThumbs) return;
        if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    }, [embla, emblaThumbs]);

    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return;
        setSelectedIndex(embla.selectedScrollSnap());
        emblaThumbs.scrollTo(embla.selectedScrollSnap());
    }, [embla, emblaThumbs, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);

    return (
        <>
            <div className="embla absolute bottom-4pal left-pal lg:left-2pal right-pal lg:right-2pal top-2pal z-[999]">
                <div className="embla__viewport h-full" ref={mainViewportRef}>
                    <div className="embla__container h-full">
                        {slides.map((img, index) => (
                            <div className="embla__slide w-full h-full relative flex justify-center items-center" key={index}>
                                <div className="embla__slide__description absolute inset-0 opacity-0 hover:opacity-80 bg-gray-900 text-white transition flex flex-col justify-center items-center z-10">
                                    <div className="w-1/2 mb-8">
                                        {img.description[locale]}
                                    </div>
                                    <div className="w-1/4 flex justify-around text-2xl">
                                        <a href={img.git} title="Github">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href={img.url} title="Go to the site">
                                            <FontAwesomeIcon icon={faShareFromSquare} />
                                        </a>
                                    </div>
                                </div>
                                <div className="embla__slide__inner h-full w-full transition relative">
                                    <Image
                                        className="embla__slide__img transition"
                                        src={img.src}
                                        alt={img.title}
                                        layout="fill"
                                        objectFit="contain"
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="embla embla--thumb absolute bottom-2pal left-pal lg:left-2pal right-pal lg:right-2pal h-2pal z-[999]">
                <div className="embla__viewport h-full" ref={thumbViewportRef}>
                    <div className="embla__container embla__container--thumb h-full">
                        {slides.map((img, index) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                imgSrc={img}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmblaCarousel;
