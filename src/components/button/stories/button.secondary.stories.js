import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "components/button";

export default {
  title: "Library|Buttons/Secondary",
};

export const secondaryDefault = () => (
  <Button secondary onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryHover = () => (
  <Button secondary onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryPressed = () => (
  <Button secondary onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryDisabled = () => (
  <Button secondary disabled onClick={action("click")}>
    Secondary button
  </Button>
);
