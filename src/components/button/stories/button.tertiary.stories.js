import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "components/button";

export default {
  title: "Library|Buttons/Tertiary",
};

export const tertiaryDefault = () => (
  <Button tertiary onClick={action("click")}>
    Tertiary button
  </Button>
);

export const tertiaryHover = () => (
  <Button tertiary onClick={action("click")}>
    Tertiary button
  </Button>
);

export const tertiaryPressed = () => (
  <Button tertiary onClick={action("click")}>
    Tertiary button
  </Button>
);

export const tertiaryDisabled = () => (
  <Button tertiary disabled onClick={action("click")}>
    Tertiary button
  </Button>
);
