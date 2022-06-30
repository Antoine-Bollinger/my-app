import Section from '../components/Section';
import Image from 'next/image';
import EmblaCarousel from '../components/EmblaCarousel';

import media1 from "../public/portfolio/1.webp";
import media2 from "../public/portfolio/2.webp";
import media3 from "../public/portfolio/3.webp";
import media4 from "../public/portfolio/4.webp";
import media5 from "../public/portfolio/5.webp";
import media6 from "../public/portfolio/6.webp";

const medias = [
    {
        title: "LaMeilleureVersionDeMoi",
        src: media1
    },
    {
        title: 'Antoine Traductions',
        src: media2
    },
    {
        title: 'Les timbres de Michel',
        src: media3
    },
    {
        title: "Groupomania",
        src: media4
    },
    {
        title: 'Orinoco',
        src: media5
    },
    {
        title: 'OhMyFood',
        src: media6
    }
];

export default function Projects() {
    return (
        <Section id="projects">
            <div className="w-full h-full">
                <EmblaCarousel slides={medias} />
            </div>
        </Section >
    )
}