import Section from '../components/Section';
import EmblaCarousel from '../components/EmblaCarousel';

import { portfolio } from '../data/portfolio';

export default function Portfolio() {
    return (
        <Section id="portfolio" className="flex justify-center" full={true}>
            <EmblaCarousel slides={portfolio} />
        </Section >
    )
}