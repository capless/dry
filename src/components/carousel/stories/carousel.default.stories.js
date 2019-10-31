import React from "react";
import Grid from "components/grid";
import Text from "components/text";
import Carousel from "components/carousel";

export default {
  title: "Library|Carousels/Default",
};

export const withDefault = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel {...settings}>
      <Grid>
        <Text component="h1" textAlign="center" color="#FFFFFF" background="#5CC64C">1</Text>
      </Grid>
      <Grid>
        <Text component="h1" textAlign="center" color="#FFFFFF" background="#5CC64C">2</Text>
      </Grid>
      <Grid>
        <Text component="h1" textAlign="center" color="#FFFFFF" background="#5CC64C">3</Text>
      </Grid>
      <Grid>
        <Text component="h1" textAlign="center" color="#FFFFFF" background="#5CC64C">4</Text>
      </Grid>
      <Grid>
        <Text component="h1" textAlign="center" color="#FFFFFF" background="#5CC64C">5</Text>
      </Grid>
    </Carousel>
  );
};

export const withImages = () => {
  const imageUrls = new Array(5).fill().map((e, i) => `https://picsum.photos/800/200?ramdom=${i}`);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
