import React from "react";
import { action } from "@storybook/addon-actions";
import makeStyles from "dry/utils/makeStyles";
import Button from "dry/components/button";
import TextField from "dry/components/textfield";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import Checkbox from "dry/components/checkbox";
import FormControlLabel from "dry/components/form-control-label";
import FormGroup from "dry/components/form-group";
import FormLabel from "dry/components/form-label";
import Editor from "dry/components/editor";
import Paper from "dry/components/paper";

export default {
  title: "Forms|Sample/Default",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "120vh",
    padding: "1rem",
  },
}));

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={6}>

        <Paper>
          <Grid container spacing={2}>
            {/* Fieldset */}
            <Grid item xs={12}>
              <Text component="h1">Sample Form</Text>
            </Grid>

            {/* First name, Last name */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First name"
                defaultValue="Jane"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last name"
                defaultValue="Custodio"
              />
            </Grid>

            {/* Email Address, Contact Number */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                defaultValue="jcustodio@email.com"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="contactNumber"
                label="Contact Number"
                defaultValue="(064)-6294-275"
              />
            </Grid>

            {/* Address 1 */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address1"
                label="Address 1"
              />
            </Grid>

            {/* Address 2 */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address2"
                label="Address 2"
              />
            </Grid>

            {/* Communication */}
            <Grid item xs={12}>
              <FormLabel variant="small">Communication:</FormLabel>
              <FormGroup row style={{ marginTop: "8px" }}>
                <FormControlLabel
                  label="Email"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="SMS"
                  control={<Checkbox />}
                />
                <FormControlLabel
                  label="Phone"
                  control={<Checkbox />}
                />
              </FormGroup>
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <FormLabel variant="small">Message:</FormLabel>
              <Editor />
              <Grid container justify="flex-end">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={action("click")}
                  style={{ margin: "8px 0" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );
};
