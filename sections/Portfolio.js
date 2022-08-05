import Section from '../components/Section';
import EmblaCarousel from '../components/EmblaCarousel';

import { portfolio } from '../data/portfolio';
import { useEffect, useState } from 'react';

export default function Portfolio() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        setWidth(window.innerWidth);
    }, []);

    return (
        <Section id="portfolio" className="flex justify-center" full={true}>
            <EmblaCarousel slides={portfolio} width={width} />
        </Section >
    )
}