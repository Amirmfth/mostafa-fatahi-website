export default async function sitemap() {
  const staticRoutes = [
    "",
    "/about-me",
    "/articles",
    "/info",
    "/pricing",
    "/questions",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `https://mostafa-fatahi.ir${route}`,
    lastModified: "2025-01-27T00:00:00Z",
  }));
  return [...routes];
}
