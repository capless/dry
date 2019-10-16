import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function toSvgString(Component) {
  const svgString = encodeURIComponent(renderToStaticMarkup(<Component />));
  return `data:image/svg+xml,${svgString}`;
}

export default toSvgString;
