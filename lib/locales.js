import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import locales from "../locales/locales.json";

export async function getLocales() {
    return locales;
}

export async function getIntro(locale) {
    const fullPath = path.join(process.cwd(), 'locales', 'intro', `${locale}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        contentHtml,
        ...matterResult.data,
    };
}
