import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Carousel from "react-slick";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DryCarousel(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Carousel
      {...restProps}
      className={clsxName}
    />
  );
}

DryCarousel.defaultProps = {
  className: "",

};

DryCarousel.propTypes = {
  className: PropTypes.string,

};

const StyledCarousel = styled(DryCarousel)`
  margin: ${({ margin }) => margin};

  /* next & prev arrows */
  .slick-arrow::before {
    color: #000;
  }

  .slick-dots {
    position: unset;
  }
`;

const ThemedStyledCarousel = withTheme(StyledCarousel);

setPropTypes("DryCarousel", [Carousel, DryCarousel], ThemedStyledCarousel);

export default ThemedStyledCarousel;
