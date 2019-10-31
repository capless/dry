/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import Carousel from "components/carousel";

export default {
  title: "Library|Carousels/Custom",
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

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    cursor: "pointer",
  },
}));

export const withImages = () => {
  const classes = useStyles();
  const imageUrls = new Array(5).fill().map((e, i) => `https://picsum.photos/600/300?ramdom=${i}`);

  const settings = {
    margin: "2rem",
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Grid container direction="row" className={classes.root}>
        {dots.map((dot, i) => (
          <Grid key={i} item xs={3}>
            <img
              src={imageUrls[i]}
              alt={i}
              className={classes.img}
              onClick={dot.props.children.props.onClick}
            />
          </Grid>
        ))}
      </Grid>
    ),
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
