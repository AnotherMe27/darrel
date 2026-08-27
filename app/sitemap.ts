import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://www.soniaganda.com';
  return [
    { path: '/', lastModified: new Date().toISOString() },
    { path: '/about', lastModified: new Date().toISOString() },
    { path: '/achievements', lastModified: new Date().toISOString() },
    { path: '/contact', lastModified: new Date().toISOString() },
    { path: '/gallery', lastModified: new Date().toISOString() },
    { path: '/projects', lastModified: new Date().toISOString() },
  ].map(({ path, lastModified }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
    }));
};

export default sitemap;