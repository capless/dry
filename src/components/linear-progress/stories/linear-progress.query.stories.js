import React from "react";
import LinearProgress from "components/linear-progress";

export default {
  title: "Library|LinearProgress/Query",
};


export const primary = () => <LinearProgress variant="query" />;

export const secondary = () => <LinearProgress variant="query" color="secondary" />;
