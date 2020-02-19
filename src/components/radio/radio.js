import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryRadio(props) {
  const { className, ...restProps } = props;

  const clsxName = clsx(className, {});

  return <Radio {...restProps} className={clsxName} />;
}

DryRadio.defaultProps = {
  className: "",
  disableRipple: true
};

DryRadio.propTypes = {
  className: PropTypes.string,
  disableRipple: PropTypes.bool
};

const StyledRadio = styled(DryRadio)`
  &.MuiRadio-colorSecondary {
    &.Mui-checked {
      color: #5cc64c;

      &:hover {
        background-color: transparent;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }

  svg:first-of-type {
    color: #d5d5d5;
  }
`;

const ThemedStyledRadio = withTheme(StyledRadio);

setPropTypes("DryRadio", [Radio, DryRadio], ThemedStyledRadio);

export default ThemedStyledRadio;
