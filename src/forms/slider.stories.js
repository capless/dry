import React from "react";
import Grid from "components/grid";
import Text from "components/text";
import Slider from "components/slider";

export default {
  title: "Forms|Slider/Default",
};

export const all = () => (
  <Grid className="storybook-adjusted" container justify="center">
    <Grid item xs={6}>
      <Grid container spacing={2}>
        {/* Form Sliders */}
        <Grid item xs={12}>
          <Text component="h1" className="form-title">Form Sliders</Text>
        </Grid>

        {/* One Marker */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Text component="h2" className="form-sub-title">One Marker</Text>
            </Grid>

            {/* Enabled */}
            <Grid item xs={12}>
              <Text>Enabled</Text>
              <Slider defaultValue={40} />
            </Grid>

            {/* Disabled */}
            <Grid item xs={12}>
              <Text>Disabled</Text>
              <Slider defaultValue={40} disabled />
            </Grid>
          </Grid>
        </Grid>

        {/* Two Marker */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Text component="h2" className="form-sub-title">Two Marker</Text>
            </Grid>

            {/* Enabled */}
            <Grid item xs={12}>
              <Text>Enabled</Text>
              <Slider defaultValue={[20, 70]} />
            </Grid>

            {/* Disabled */}
            <Grid item xs={12}>
              <Text>Disabled</Text>
              <Slider defaultValue={[20, 70]} disabled />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  </Grid>
);
