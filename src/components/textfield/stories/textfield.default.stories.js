import React from "react";
import TextField from "components/textfield";
import Grid from "components/grid";
import InputAdornment from "components/input-adornment";
import { Calendar } from "icons";

export default {
  title: "Library|TextFields/Default",
};

export const all = () => (
  <>
    <Grid
      container
      spacing={6}
    >
      <Grid item xs={12}>
        <TextField
          id="id"
          label="First name"
          defaultValue="Jane"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="id"
          label="Title"
          defaultValue="Office meet-up"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Calendar />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="id"
          label="Title"
          defaultValue="Name"
          valueSize="large"
        />
      </Grid>
    </Grid>
  </>
);

export const TitleWithIconOnRight = () => (
  <TextField
    id="id"
    label="Title"
    defaultValue="Office meet-up"
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <Calendar />
        </InputAdornment>
      ),
    }}
  />
);

export const Title = () => (
  <TextField
    id="id"
    label="Title"
    defaultValue="Name"
    valueSize="large"
  />
);
