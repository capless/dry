import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "dry/components/button";

export default {
  title: "Library|Buttons/Tertiary",
};

export const tertiaryDefault = () => (
  <Button onClick={action("click")}>Tertiary button</Button>
);

export const tertiaryDisabled = () => (
  <Button disabled onClick={action("click")}>
    Tertiary button
  </Button>
);
