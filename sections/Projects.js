import Section from '../components/Section';
import EmblaCarousel from '../components/EmblaCarousel';

import { portfolio } from '../data/portfolio';

export default function Projects() {
    return (
        <Section id="projects" className="flex justify-center items-center">
            <EmblaCarousel slides={portfolio} />
        </Section >
    )
}