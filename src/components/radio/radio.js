import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Radio } from "@material-ui/core";
import { withTheme } from "theme";

function DryRadio(props) {
  const {
    className,
    ...restProps
  } = props;

  const clsxName = clsx(className, {

  });

  return (
    <Radio
      {...restProps}
      className={clsxName}
    />
  );
}

DryRadio.defaultProps = {
  className: "",
  disableRipple: true,
};

DryRadio.propTypes = {
  className: Proptypes.string,
  disableRipple: Proptypes.bool,
};

const StyledRadio = styled(DryRadio)`
  &.MuiRadio-colorSecondary {
    &.Mui-checked {
      color: #5CC64C;

      &:hover {
        background-color: transparent;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }

  svg:first-of-type {
    color: #D5D5D5;
  }
`;

export default withTheme(StyledRadio);
