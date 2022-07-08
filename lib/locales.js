import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html';

import locales from "../locales/locales.json";

export async function getLocales() {
    return locales;
}

export async function getMarkup(pathName, locale) {
    const fullPath = path.join(process.cwd(), 'locales', pathName, `${locale}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkHtml)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        contentHtml,
        ...matterResult.data,
    };
}
