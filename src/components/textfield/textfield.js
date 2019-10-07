import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { withTheme } from "theme";

function DryTextField(props) {
  const {
    className,
    valueSize,
    ...restProps
  } = props;
  const clsxName = clsx(className, {
    [`MuiInput-input--${valueSize}`]: valueSize,
  });

  return (
    <TextField
      {...restProps}
      className={clsxName}

    />
  );
}

DryTextField.defaultProps = {
  className: "",
  valueSize: "normal",

};

DryTextField.propTypes = {
  className: Proptypes.string,
  valueSize: Proptypes.oneOf([
    "normal",
    "large",
  ]),
};

const StyledTextField = styled(DryTextField)`
  &.MuiTextField-root {
    min-width: 25%;
  }

  /* label */
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.colors.gray};
    font-style: normal;
    font-weight: normal;
  }

  /* normal input */
  .MuiInputBase-input {
    padding-top: 8px;
    padding-bottom: 9px;
    color: #707683;
    font-style: normal;
    font-weight: normal;
  }

  /* large input value */
  &.MuiInput-input--large {
    .MuiInputBase-input {
      padding-bottom: 6px;
      font-style: normal;
      font-weight: bold;
      color: #192A3E;
    }
  }

  .MuiInputAdornment-root {
    width: 36px;
    height: 100%;
    padding: 6px 0;
    margin: 0;
  }

  /* input underline */
  .MuiInput-underline {
    &::before, &::after {
      border-bottom-color: #D3D8DD;
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #D3D8DD;
    }
  }

  /* edit mode */
  .Mui-focused {
    .MuiInputBase-input {
      background: #EBEFF2;
    }

    .MuiInputAdornment-root {
      background: #EBEFF2;
    }

    &.MuiInput-underline::after {
      border-bottom: 1px solid #818E9B;
    }
  }
`;

export default withTheme(StyledTextField);
