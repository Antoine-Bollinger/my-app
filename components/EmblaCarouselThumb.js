import Image from "next/image";
import React from "react";

export const Thumb = ({ selected, onClick, imgSrc }) => (
    <div className={`embla__slide embla__slide--thumb  ${selected ? "is-selected" : ""}`}>
        <button
            onClick={onClick}
            className="embla__slide__inner embla__slide__inner--thumb"
            type="button"
        >
            <Image
                className="embla__slide__thumbnail  grayscale-[50%]"
                src={imgSrc.src}
                height={imgSrc.src.heigt}
                width={imgSrc.src.width}
                alt={imgSrc.title}
                layout="fill"
            />
        </button>
    </div>
);
