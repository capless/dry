import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "components/button";

export default {
  title: "Button",
};

export const flatDefault = () => (
  <Button flat onClick={action("click")}>
    Hello, World!
  </Button>
);

export const flatPrimary = () => (
  <Button flat primary onClick={action("click")}>
    Hello, World!
  </Button>
);

export const flatSecondary = () => (
  <Button flat secondary onClick={action("click")}>
    Hello, World!
  </Button>
);

export const raisedDefault = () => (
  <Button raised onClick={action("click")}>
    Hello, World!
  </Button>
);

export const raisedPrimary = () => (
  <Button raised primary onClick={action("click")}>
    Hello, World!
  </Button>
);

export const raisedSecondary = () => (
  <Button raised secondary onClick={action("click")}>
    Hello, World!
  </Button>
);
