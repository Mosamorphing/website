import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Mosadoluwa Fasasi";

const ROUTE_METADATA = {
  "/": {
    title: SITE_NAME,
    description: "The official website of Mosadoluwa Fasasi.",
  },
  "/work": {
    title: `Work | ${SITE_NAME}`,
    description: "Work, affiliations, and contact for Mosadoluwa Fasasi.",
  },
  "/media": {
    title: `Media | ${SITE_NAME}`,
    description:
      "Notes, features, publications, and talks by and featuring Mosadoluwa Fasasi.",
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

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[location.pathname];

    if (!metadata) return;

    document.title = metadata.title;

    setMetaTag("meta[name='description']", {
      name: "description",
      content: metadata.description,
    });
  }, [location.pathname]);

  return null;
};

export default RouteMetadata;
