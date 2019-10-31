import React from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import Text from "components/text";
import Carousel from "components/carousel";

export default {
  title: "Library|Carousels/Default",
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "200px",
    color: "#FFF",
    background: "#5CC64C",
    alignItems: "center",
    alignContent: "center",
  },
}));

export const withDefault = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: "2rem",
  };

  return (
    <Carousel {...settings}>
      <Grid className={classes.root}>
        <Text component="h1" textAlign="center" color="#FFFFFF">1</Text>
      </Grid>
      <Grid className={classes.root}>
        <Text component="h1" textAlign="center" color="#FFFFFF">2</Text>
      </Grid>
      <Grid className={classes.root}>
        <Text component="h1" textAlign="center" color="#FFFFFF">3</Text>
      </Grid>
      <Grid className={classes.root}>
        <Text component="h1" textAlign="center" color="#FFFFFF">4</Text>
      </Grid>
      <Grid className={classes.root}>
        <Text component="h1" textAlign="center" color="#FFFFFF">5</Text>
      </Grid>
    </Carousel>
  );
};

export const withImages = () => {
  const imageUrls = new Array(5).fill().map((e, i) => `https://picsum.photos/800/200?ramdom=${i}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: "2rem",
  };
  return (
    <Carousel {...settings}>
      {imageUrls.map((url) => (
        <Grid key={url}>
          <img style={{ width: "100%" }} src={url} alt={url} />
        </Grid>
      ))}
    </Carousel>
  );
};

export const withMultipleImages = () => {
  const imageUrls = new Array(24).fill().map((e, i) => `https://picsum.photos/400/400?ramdom=${i}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    margin: "2rem",
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Carousel {...settings}>
          {imageUrls.map((url) => (
            <Grid key={url}>
              <img style={{ width: "100%" }} src={url} alt={url} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};
