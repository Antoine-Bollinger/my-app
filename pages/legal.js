import MainHead from "../components/Head";
import { getLocales } from "../lib/locales";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
    const data = await getLocales();
    return {
        props: {
            data
        },
    };
}

export default function FourOhFour({ data }) {
    const [siteUrl, setSiteUrl] = useState('');
    const { locale } = useRouter();
    const [locales, setLocales] = useState(data[locale === 'default' ? 'en' : locale].legal);

    useEffect(() => {
        setSiteUrl(window.location.origin);
    }, []);

    return (
        <>
            <MainHead title={locales.title} />
            <main className="w-full h-full p-3pal overflow-y-auto">
                <a href={siteUrl} className="text-orange-900 hover:text-orange-700 transition">
                    <h1 className="fixed text-center lg:text-left top-0 left-0 right-0 lg:top-pal w-full lg:left-2pal text-3xl uppercase font-bold h-2pal lg:h-auto z-40">Antoine Bollinger</h1>
                </a>

                <h1 className="text-3xl mb-8">{locales.title}</h1>
                <p>&nbsp;</p>
                <p>
                    Les créations réalisées par la société <a href={siteUrl}><b>Antoine Pierre Bollinger</b></a> sont protégées au titre du droit d’auteur conformément aux dispositions des livres I à III du Code de la Propriété Intellectuelle. A ce titre, toute reproduction, représentation, utilisation, adaptation, modification, incorporation, traduction, commercialisation, partielles ou intégrales des éléments contenus dans ce site, sans l’autorisation écrite préalable de <a href={siteUrl}><b>Antoine Pierre Bollinger</b></a> est interdite, sous peine de constituer un délit de contrefaçon de droit d’auteur.
                </p>
                <p>&nbsp;</p>
                <h2>Données personnelles</h2>
                <p>&nbsp;</p>
                <p>
                    En application de la loi n° 78-17 du 6 janvier 1978 (« informatique et libertés »), vous disposez d’un droit d’accès aux informations qui vous concernent et vous pouvez les faire modifier. Si vous souhaitez faire modifier ou supprimer certaines des données qui vous concernent, veuillez
                    contacter directement la société dont les coordonnées figurent sur le site.
                </p>
                <p>&nbsp;</p>
                <h2>Entreprise</h2>
                <p>&nbsp;</p>
                <p>
                    <a href={siteUrl}><b>Antoine Pierre Bollinger</b></a>
                </p>
                <p>
                    14 Rue de Bergkamen<br />
                    92230 GENNEVILLIERS<br />
                    France
                </p>
                <p>SIRET 522 191 196 00032</p>
                <p>&nbsp;</p>
                <h2>Directeur de publication</h2>
                <p>&nbsp;</p>
                <p>
                    Antoine Bollinger | <a href="mailto:antoine.bollinger@gmail.com" >antoine.bollinger@gmail.com</a>
                </p>
                <p>&nbsp;</p>
                <h2>Hébergement</h2>
                <p>&nbsp;</p>
                <p>Le présent site est hébergé par la société d&#8217;hébergement Gandi</p>
                <p>
                    <b>GANDI SAS</b><br />
                    63-65 boulevard Massena<br />
                    F-75013 Paris<br />
                    France
                </p>

            </main>
        </>
    )
}