import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/models',
    },
    sitemap: 'https://ego-challenge-eliezer.vercel.app/sitemap.xml',
  };
}
