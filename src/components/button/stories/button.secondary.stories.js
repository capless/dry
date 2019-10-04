import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "components/button";

export default {
  title: "Library|Buttons/Secondary",
};

export const secondaryDefault = () => (
  <Button color="secondary" variant="outlined" onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryHover = () => (
  <Button color="secondary" variant="outlined" onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryPressed = () => (
  <Button color="secondary" variant="outlined" onClick={action("click")}>
    Secondary button
  </Button>
);

export const secondaryDisabled = () => (
  <Button
    color="secondary"
    variant="outlined"
    disabled
    onClick={action("click")}
  >
    Secondary button
  </Button>
);
