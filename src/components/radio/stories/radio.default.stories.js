import React from "react";
import Radio from "dry/components/radio";
import FormControlLabel from "dry/components/form-control-label";
import FormGroup from "dry/components/form-group";
import RadioGroup from "dry/components/radio-group";

export default {
  title: "Library|Radio Buttons/Default",
};

export const all = () => {
  const [value, setValue] = React.useState("s1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormGroup>
      <RadioGroup name="sample" value={value} onChange={handleChange}>
        <FormControlLabel
          label="Sample Item 1"
          control={<Radio value="s1" />}
        />
        <FormControlLabel
          label="Sample Item 2"
          control={<Radio value="s2" />}
        />
        <FormControlLabel
          label="Sample Item 3"
          control={<Radio value="s3" />}
        />
        <FormControlLabel
          label="Sample Item 4"
          control={<Radio value="s4" disabled />}
        />
      </RadioGroup>

    </FormGroup>
  );
};
