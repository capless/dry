import React from "react";
import Slider from "dry/components/slider";

export default {
  title: "Library|Sliders/TwoMarker",
};

export const enabled = () => (
  <Slider
    defaultValue={[10, 80]}
  />
);

export const disabled = () => (
  <Slider
    disabled
    defaultValue={[10, 80]}
  />
);
