import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_METADATA } from "../../seo.js";

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
