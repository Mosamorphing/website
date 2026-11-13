import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  PUBLIC_ROUTES,
  ROUTE_METADATA,
  SITE_NAME,
  SITE_URL,
} from "../src/seo.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist");
const serverOutputDirectory = path.join(projectRoot, "dist-ssr");
const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const serverEntryUrl = pathToFileURL(
  path.join(serverOutputDirectory, "entry-server.js"),
).href;
const { render } = await import(serverEntryUrl);
const rootPlaceholder = '<div id="root"></div>';

if (!template.includes(rootPlaceholder)) {
  throw new Error("Prerender failed: root placeholder was not found in dist/index.html.");
}

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const addRouteMetadata = (html, route) => {
  const metadata = ROUTE_METADATA[route] ?? {
    title: SITE_NAME,
    description: ROUTE_METADATA["/"].description,
  };
  const canonicalUrl = `${SITE_URL}${route === "/" ? "/" : route}`;

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?"\s*\/>/s,
      `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    )
    .replace(
      "</head>",
      `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n  </head>`,
    );
};

for (const route of PUBLIC_ROUTES) {
  const renderedApp = render(route);

  if (!renderedApp.trim()) {
    throw new Error(`Prerender failed: ${route} rendered no content.`);
  }

  const routeHtml = addRouteMetadata(
    template.replace(rootPlaceholder, `<div id="root">${renderedApp}</div>`),
    route,
  );
  const routeDirectory =
    route === "/"
      ? outputDirectory
      : path.join(outputDirectory, route.slice(1));

  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), routeHtml);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_ROUTES.map((route) => `  <url><loc>${SITE_URL}${route === "/" ? "/" : route}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap);
await rm(serverOutputDirectory, { recursive: true, force: true });
