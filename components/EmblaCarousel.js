import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumb";

const EmblaCarousel = ({ slides }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        selectedClass: "",
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index) => {
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );

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
        <div className="h-full w-full flex flex-col">
            <div className="embla flex-1 w-full">
                <div className="embla__viewport" ref={mainViewportRef}>
                    <div className="embla__container">
                        {slides.map((img, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__inner relative">
                                    <Image
                                        className="embla__slide__img"
                                        src={img.src}
                                        alt={img.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="embla embla--thumb w-full">
                <div className="embla__viewport" ref={thumbViewportRef}>
                    <div className="embla__container embla__container--thumb">
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
        </div>
    );
};

export default EmblaCarousel;
