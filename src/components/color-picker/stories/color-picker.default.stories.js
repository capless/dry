/* eslint-disable import/named */
import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Box from "dry/components/box";
import Grid from "dry/components/grid";
import Typography from "dry/components/typography";
import {
  AlphaPicker, BlockPicker,
  ChromePicker, CirclePicker,
  CompactPicker, GithubPicker,
  HuePicker, PhotoshopPicker,
  SketchPicker, SliderPicker,
  SwatchesPicker, TwitterPicker,
} from "dry/components/color-picker/react-color";

export default {
  title: "Library|ColorPicker/Default",
};

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
    height: "120vh",
  },

  container: {
    marginBottom: "4rem",

    "& .MuiGrid-item": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  fixedWidth: {
    width: "220px !important",
  },
}));

export const allPickers = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            AlphaPicker
          </Typography>
          <AlphaPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            BlockPicker
          </Typography>
          <BlockPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            ChromePicker
          </Typography>
          <ChromePicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
          CirclePicker
          </Typography>
          <CirclePicker className={classes.fixedWidth} />
        </Grid>
      </Grid>

      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            CompactPicker
          </Typography>
          <CompactPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            GithubPicker
          </Typography>
          <GithubPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            HuePicker
          </Typography>
          <HuePicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            PhotoshopPicker
          </Typography>
          <PhotoshopPicker className={classes.fixedWidth} />
        </Grid>
      </Grid>

      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            SketchPicker
          </Typography>
          <SketchPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            SliderPicker
          </Typography>
          <SliderPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            SwatchesPicker
          </Typography>
          <SwatchesPicker className={classes.fixedWidth} />
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h6" align="center" className={classes.fixedWidth}>
            TwitterPicker
          </Typography>
          <TwitterPicker className={classes.fixedWidth} />
        </Grid>
      </Grid>
    </Box>
  );
};
