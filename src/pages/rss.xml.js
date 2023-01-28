import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Megan Learns Astro | Blog',
    description: 'My journey learning Astro',
    site: 'https://meganesulli-astro-tutorial.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}