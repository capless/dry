import React from "react";
import Slider from "components/slider";

export default {
  title: "Library|Sliders/OneMarker",
};

export const enabled = () => (
  <Slider
    defaultValue={20}
  />
);

export const disabled = () => (
  <Slider
    disabled
    defaultValue={20}
  />
);
