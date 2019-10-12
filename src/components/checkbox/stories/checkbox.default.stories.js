import React from "react";
import Checkbox from "components/checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from "@material-ui/core";

export default {
  title: "Library|Checkboxes/Default",
};

export const all = () => (
  <FormGroup>
    <FormControlLabel
      label="Sample Item 1"
      control={<Checkbox defaultChecked />}
    />
    <FormControlLabel
      label="Sample Item 2"
      control={<Checkbox />}
    />
    <FormControlLabel
      label="Sample Item 3"
      control={<Checkbox />}
    />
    <FormControlLabel
      label="Sample Item 4"
      control={<Checkbox disabled />}
    />
  </FormGroup>
);
