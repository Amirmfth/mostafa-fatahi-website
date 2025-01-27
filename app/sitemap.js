export default async function sitemap() {
    const staticRoutes = ["", "/about-me", "/articles", "/info", "/pricing", "/questions"];

    const routes = staticRoutes.map((route) => ({
        url: `https://mostafa-fatahi.ir${route}`,
        lastModified: new Date().toString(),
    }));

    return [...routes];
}