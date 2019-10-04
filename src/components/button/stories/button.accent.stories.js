import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "components/button";

export default {
  title: "Library|Buttons/Accent",
};

export const primaryDefault = () => (
  <Button color="primary" variant="contained" onClick={action("click")}>
    Accent button
  </Button>
);

export const primaryDisabled = () => (
  <Button
    color="primary"
    variant="contained"
    disabled
    onClick={action("click")}
  >
    Accent button
  </Button>
);
