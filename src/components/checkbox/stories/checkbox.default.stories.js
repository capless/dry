import React from "react";
import Checkbox from "dry/components/checkbox";
import FormControlLabel from "dry/components/form-control-label";
import FormGroup from "dry/components/form-group";

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
