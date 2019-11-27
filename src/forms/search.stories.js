import React, { useState } from "react";
import makeStyles from "utils/makeStyles";
import Button from "components/button";
import Grid from "components/grid";
import Text from "components/text";
import Checkbox from "components/checkbox";
import FormControlLabel from "components/form-control-label";
import FormGroup from "components/form-group";
import FormLabel from "components/form-label";
import Paper from "components/paper";
import Select from "components/select";
import MenuItem from "components/menu-item";

export default {
  title: "Forms|Search/Default",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "120vh",
    padding: "1rem",
  },

  formGroup: {
    marginTop: 8,

    "& .MuiFormControlLabel-root": {
      minWidth: "45%",
    },
  },

  gridItemButton: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const all = () => {
  const classes = useStyles();
  const [state, setState] = useState({});

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={3}>

        <Paper>
          <Grid container spacing={2}>
            {/* Fieldset */}
            <Grid item xs={12}>
              <Text component="h1">Search Vehicle</Text>
            </Grid>

            {/* Make */}
            <Grid item xs={12}>
              <Select
                fullWidth
                label="Make"
                name="make"
                value={state.make || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>Select one</MenuItem>
                <MenuItem value={1}>Toyota</MenuItem>
                <MenuItem value={2}>Honda</MenuItem>
                <MenuItem value={3}>Nissan</MenuItem>
                <MenuItem value={4}>Mazda</MenuItem>
              </Select>
            </Grid>

            {/* Model */}
            <Grid item xs={12}>
              <Select
                fullWidth
                label="Model"
                name="model"
                value={state.model || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>Select one</MenuItem>
                <MenuItem value={1}>Model X</MenuItem>
                <MenuItem value={2}>Model Y</MenuItem>
                <MenuItem value={3}>Model Z</MenuItem>
              </Select>
            </Grid>

            {/* From Year */}
            <Grid item xs={12}>
              <Select
                fullWidth
                label="Year"
                name="fromYear"
                value={state.fromYear || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>From Year</MenuItem>
                <MenuItem value={1}>2019</MenuItem>
                <MenuItem value={2}>2018</MenuItem>
                <MenuItem value={3}>2017</MenuItem>
              </Select>
            </Grid>

            {/* To Year */}
            <Grid item xs={12}>
              <Select
                fullWidth
                name="toYear"
                value={state.toYear || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>To Year</MenuItem>
                <MenuItem value={1}>2019</MenuItem>
                <MenuItem value={2}>2018</MenuItem>
                <MenuItem value={3}>2017</MenuItem>
              </Select>
            </Grid>

            {/* Transmission */}
            <Grid item xs={12}>
              <FormLabel variant="small">Transmission</FormLabel>
              <FormGroup row className={classes.formGroup}>
                <FormControlLabel
                  label="Manual"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Automatic"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Diesel"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Gasoline"
                  control={<Checkbox />}
                />
              </FormGroup>
            </Grid>

            {/* Color */}
            <Grid item xs={12}>
              <Select
                fullWidth
                label="Color"
                name="color"
                value={state.color || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>Select One</MenuItem>
                <MenuItem value={1}>Sports Red</MenuItem>
                <MenuItem value={3}>Gun Metallic</MenuItem>
                <MenuItem value={3}>White Pearl</MenuItem>
              </Select>
            </Grid>

            {/* From Price */}
            <Grid item xs={12}>
              <Select
                fullWidth
                label="Price"
                name="fromPrice"
                value={state.fromPrice || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>From Price</MenuItem>
                <MenuItem value={1}>0</MenuItem>
                <MenuItem value={2}>10, 000</MenuItem>
                <MenuItem value={3}>20, 000</MenuItem>
              </Select>
            </Grid>

            {/* To Price */}
            <Grid item xs={12}>
              <Select
                fullWidth
                name="toPrice"
                value={state.toPrice || 0}
                onChange={handleChangeSelect}
              >
                <MenuItem value={0}>To Price</MenuItem>
                <MenuItem value={1}>50, 000</MenuItem>
                <MenuItem value={2}>75, 000</MenuItem>
                <MenuItem value={3}>100, 000</MenuItem>
              </Select>
            </Grid>

            {/* Condition */}
            <Grid item xs={12}>
              <FormLabel variant="small">Condition</FormLabel>
              <FormGroup row className={classes.formGroup}>
                <FormControlLabel
                  label="New"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="User"
                  control={<Checkbox />}
                />
              </FormGroup>
            </Grid>

            {/* Search */}
            <Grid item xs={12} className={classes.gridItemButton}>
              <Button
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </Grid>

          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );

  function handleChangeSelect(e) {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
};
