import { readFileSync } from 'fs';
import path from 'path';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
    const slugs = JSON.parse(readFileSync(path.join(process.cwd(), 'static', 'error', 'slugs.json'), 'utf-8'));
    return slugs.map(slug => {
        return {
            slug: slug.slug
        };
    });

    // return [
    //     { slug: 'book_dupe' },
    //     { slug: 'cant_load_jar' }
    // ]
}

export const prerender = true;