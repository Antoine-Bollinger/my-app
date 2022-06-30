import Head from "next/head";
import { useEffect, useState } from "react";

export const siteTitle = 'Antoine Bollinger';
export const siteDescription = "Website of the fullstack developer Antoine Bollinger";
export const siteAuthor = "Antoine Bollinger";

export default function MainHead({ title = '' }) {
    const [siteUrl, setSiteUrl] = useState('');

    useEffect(() => {
        setSiteUrl(window.location.origin);
    }, []);

    return (
        <Head>
            <title>{`${siteTitle}${title ? ` | ${title}` : ''}`}</title>
            <meta name="description" content={siteDescription} />
            <meta name="author" content={siteAuthor} />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="icon" type="image/ico" href="/favicon.ico" />
            <meta name="twitter:image:src" content="/preview.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta property="og:image" content="/preview.jpg" />
            <meta property="og:image:alt" content={siteDescription} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content="object" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:description" content={siteDescription} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}