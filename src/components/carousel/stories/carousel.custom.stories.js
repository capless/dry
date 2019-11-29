/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Carousel from "dry/components/carousel";

export default {
  title: "Library|Carousels/Custom",
};

const useStyles = makeStyles(() => ({
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    cursor: "pointer",
    border: "2px solid #C2CFE0",
    boxSizing: "border-box",

    "&.slick-active": {
      border: "2px solid #5CC64C",
    },
  },
}));

export const withImages = () => {
  const classes = useStyles();
  const imageUrls = new Array(5).fill().map((e, i) => `https://picsum.photos/600/280?ramdom=${i}`);

  const settings = {
    margin: "2rem",
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Grid container direction="row">
        {dots.map((dot, i) => (
          <Grid key={i} item xs={3}>
            <img
              src={imageUrls[i]}
              alt={i}
              className={`${classes.img} ${dot.props.className}`}
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
