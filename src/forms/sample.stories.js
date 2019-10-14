import React from "react";
import TextField from "components/textfield";
import Grid from "components/grid";
import Text from "components/text";
import InputLabel from "components/input-label";

export default {
  title: "Forms|Sample/Default",
};

export const all = () => (
  <Grid className="storybook-adjusted" container justify="center">
    <Grid item xs={6}>
      <Grid container spacing={2}>
        {/* Fieldset */}
        <Grid item xs={12}>
          <Text component="h1" className="form-title">Sample Form</Text>
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
          <InputLabel
            label="Communication:"
          />

        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
