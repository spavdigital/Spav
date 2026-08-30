// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spavdigital.com.br',
  integrations: [
    sitemap({
      // /gallery is routed and built, but it renders noindex while no case has
      // screenshots[] filled in — listing an intentionally noindexed page in
      // the sitemap is a Search Console warning for nothing. Drop this second
      // condition at the same time you uncomment the nav item in Header.astro.
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/gallery/'),
    }),
  ],
});
