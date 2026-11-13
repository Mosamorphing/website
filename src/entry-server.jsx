import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "./App.jsx";

export const render = (url) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </StrictMode>,
  );
