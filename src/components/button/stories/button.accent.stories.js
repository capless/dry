import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "components/button";

export default {
  title: "Library|Buttons/Accent",
};

export const primaryDefault = () => (
  <Button primary onClick={action("click")}>
      Accent button
  </Button>
);

export const primaryHover = () => (
  <Button primary onClick={action("click")}>
    Accent button
  </Button>
);

export const primaryPressed = () => (
  <Button primary onClick={action("click")}>
    Accent button
  </Button>
);

export const primaryDisabled = () => (
  <Button primary disabled onClick={action("click")}>
    Accent button
  </Button>
);
