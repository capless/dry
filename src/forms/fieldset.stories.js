import React from "react";
import makeStyles from "utils/makeStyles";
import TextField from "components/textfield";
import Select from "components/select";
import Grid from "components/grid";
import MenuItem from "components/menu-item";
import Paper from "components/paper";
import Text from "components/text";
import Button from "components/button";

export default {
  title: "Forms|Fieldset/Default",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },

  gridItemButton: {
    display: "flex",
    justifyContent: "flex-end",
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
              <Text component="h1" className="form-title">Fieldset</Text>
            </Grid>

            {/* Personal Information */}
            <Grid item xs={12}>
              <Text component="h2" className="form-sub-title">Personal Information</Text>
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

            {/* Personal Information */}
            <Grid item xs={12}>
              <Text component="h2" className="form-sub-title">Address Details</Text>
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

            {/* Town / City */}
            <Grid item xs={6}>
              <Select
                fullWidth
                label="Town / City"
                value={0}
                onChange={() => {}}
              >
                <MenuItem value={0}>Select one</MenuItem>
                <MenuItem value={1}>City 1</MenuItem>
                <MenuItem value={2}>City 2</MenuItem>
                <MenuItem value={3}>City 3</MenuItem>
                <MenuItem value={4}>City 4</MenuItem>
              </Select>
            </Grid>

            {/* ZIP Code */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="zipCode"
                label="ZIP Code"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridItemButton}>
              <Button
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );
};
