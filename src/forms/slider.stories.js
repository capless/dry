import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import Slider from "dry/components/slider";
import Paper from "dry/components/paper";

export default {
  title: "Forms|Slider/Default",
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
            {/* Form Sliders */}
            <Grid item xs={12}>
              <Text component="h1">Form Sliders</Text>
            </Grid>

            {/* One Marker */}
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Text component="h2">One Marker</Text>
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
                  <Text component="h2">Two Marker</Text>
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
        </Paper>

      </Grid>
    </Grid>
  );
};
