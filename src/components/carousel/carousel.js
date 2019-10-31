import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Carousel from "react-slick";
import { withTheme } from "theme";

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
  className: Proptypes.string,

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

export default withTheme(StyledCarousel);
