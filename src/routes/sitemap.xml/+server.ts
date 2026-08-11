import config from '$lib/config';
import menu from '$lib/assets/menu.pdf?url';

export const prerender = true;

export const GET = async () =>
	new Response(
		`
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
	<url>
		<loc>${config.baseUrl}/</loc>
		<lastmod>2026-03-13</lastmod>
		<priority>1</priority>
	</url>

	<url>
		<loc>${config.baseUrl}${menu}</loc>
		<lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
		<priority>0.8</priority>
	</url>
	
	<url>
		<loc>${config.baseUrl}/privacy-policy</loc>
		<lastmod>2026-03-13</lastmod>
		<priority>0.5</priority>
	</url>
</urlset>
`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
