import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Mosadoluwa Fasasi";
const SITE_URL = "https://mosadoluwafasasi.com";
const DEFAULT_IMAGE = `${SITE_URL}/olhenry.jpeg`;

const ROUTE_METADATA = {
  "/work": {
    title: `Work | ${SITE_NAME}`,
    description: "Work, affiliations, and contact for Mosadoluwa Fasasi.",
  },
  "/media": {
    title: `Media | ${SITE_NAME}`,
    description:
      "Notes, features, publications, and talks by and featuring Mosadoluwa Fasasi across research, coordination, and culture.",
  },
};

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const setCanonicalUrl = (url) => {
  let element = document.head.querySelector("link[rel='canonical']");

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
};

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[location.pathname];

    if (!metadata) return;

    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = metadata.title;

    setMetaTag("meta[name='description']", {
      name: "description",
      content: metadata.description,
    });
    setMetaTag("meta[property='og:title']", {
      property: "og:title",
      content: metadata.title,
    });
    setMetaTag("meta[property='og:description']", {
      property: "og:description",
      content: metadata.description,
    });
    setMetaTag("meta[property='og:type']", {
      property: "og:type",
      content: "website",
    });
    setMetaTag("meta[property='og:url']", {
      property: "og:url",
      content: canonicalUrl,
    });
    setMetaTag("meta[property='og:image']", {
      property: "og:image",
      content: DEFAULT_IMAGE,
    });
    setMetaTag("meta[name='twitter:card']", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMetaTag("meta[name='twitter:title']", {
      name: "twitter:title",
      content: metadata.title,
    });
    setMetaTag("meta[name='twitter:description']", {
      name: "twitter:description",
      content: metadata.description,
    });
    setMetaTag("meta[name='twitter:image']", {
      name: "twitter:image",
      content: DEFAULT_IMAGE,
    });

    setCanonicalUrl(canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default RouteMetadata;
