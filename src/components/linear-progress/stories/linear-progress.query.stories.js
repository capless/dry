import React from "react";
import LinearProgress from "dry/components/linear-progress";

export default {
  title: "Library|LinearProgress/Query",
};


export const primary = () => <LinearProgress variant="query" />;

export const secondary = () => <LinearProgress variant="query" color="secondary" />;
