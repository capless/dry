import React from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import ImageLoader from "components/image-loader";

export default {
  title: "Library|ImageLoaders/Default",
};

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

export const withLoader = () => {
  const classes = useStyles();
  const imageUrls = new Array(8).fill().map((e, i) => `https://picsum.photos/1600/1600?ramdom=${i}`);

  return (
    <Grid container spacing={1}>
      {imageUrls.map((url) => (
        <Grid key={url} item xs={3}>
          <ImageLoader
            src={url}
            alt={url}
            className={classes.image}
            loader="Image loading..."
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const withUnLoader = () => {
  const classes = useStyles();
  const imageUrls = new Array(8).fill().map((e, i) => `https://picsum.photos/1600/1600?ramdom=${i}`);

  return (
    <Grid container spacing={1}>
      {imageUrls.map((url, i) => (
        <Grid key={url} item xs={3}>
          <ImageLoader
            src={i % 2 ? url : ""}
            alt={url}
            className={classes.image}
            loader="Image loading..."
            unloader="Image not found"
          />
        </Grid>
      ))}
    </Grid>
  );
};
