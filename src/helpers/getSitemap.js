export default async (requestContext) => {
return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://localhost/</loc>
      <lastmod>2018-11-04</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
   </url>
</urlset>
`
}