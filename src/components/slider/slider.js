import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Slider } from "@material-ui/core";
import { withTheme } from "theme";

function DrySlider(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Slider
      {...restProps}
      className={clsxName}
    />
  );
}

DrySlider.defaultProps = {
  className: "",

};

DrySlider.propTypes = {
  className: Proptypes.string,

};

const StyledSlider = styled(DrySlider)`
  &.MuiSlider-root {
    color: #5CC64C;

    .MuiSlider-rail {
      height: 5px;
      color: #E3E3E3;
    }

    .MuiSlider-track {
      height: 5px;
    }

    .MuiSlider-thumb {
      width: 15px;
      height: 15px;

      &:hover {
        box-shadow: 0px 0px 0px 10px rgba(47, 162, 30, 0.2);
      }

      &.MuiSlider-active {
        box-shadow: 0px 0px 0px 10px rgba(47, 162, 30, 0.2);
      }
    }
  }
`;

export default withTheme(StyledSlider);
