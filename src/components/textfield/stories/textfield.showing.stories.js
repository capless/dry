import React from "react";
import makeStyles from "utils/makeStyles";
import { Calendar } from "icons";
import TextField from "components/textfield";
import Select from "components/select";
import Grid from "components/grid";
import InputAdornment from "components/input-adornment";
import Avatar from "components/avatar";
import Box from "components/box";
import MenuItem from "components/menu-item";
import InputLabel from "components/input-label";

export default {
  title: "Library|Inputs/Showing",
};

const useStyles = makeStyles(() => ({
  grid: {
    margin: 0,
  },
}));


export const all = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="First name"
          defaultValue="Jane"
          textVariant="naked"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="id"
          label="Title"
          defaultValue="Office meet-up"
          textVariant="naked"
        />
      </Grid>

      <Grid item xs={12}>
        <Select
          label="Associated with"
          value="Lindsey Stroud"
          textVariant="naked"
          onChange={() => {}}
          renderValue={(value) => (
            <Box>
              <Avatar width="24px" height="24px" src="/images/avatar-small.jpg" />
              <InputLabel>{value}</InputLabel>
            </Box>
          )}
        >
          <MenuItem value="Lindsey Stroud">Lindsey Stroud</MenuItem>
          <MenuItem value="John Doe">John Doe</MenuItem>
          <MenuItem value="Nathan Sales">Nathan Sales</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="id"
          label="Title"
          defaultValue="Office meet-up"
          textVariant="naked"
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
          textVariant="naked"
        />
      </Grid>

    </Grid>
  );
};
