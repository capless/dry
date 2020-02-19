import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

const DryTextField = forwardRef((props, ref) => {
  const { className, valueSize, textVariant, ...restProps } = props;
  const clsxName = clsx(className, {
    [`MuiInput-input--${valueSize}`]: valueSize,
    [`MuiInput-input--${textVariant}`]: textVariant
  });

  return <TextField {...restProps} ref={ref} className={clsxName} />;
});

DryTextField.defaultProps = {
  className: "",
  valueSize: "normal",
  textVariant: "normal"
};

DryTextField.propTypes = {
  className: PropTypes.string,
  valueSize: PropTypes.oneOf(["normal", "large"]),
  textVariant: PropTypes.oneOf(["normal", "naked"])
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
    font-size: 12px;

    /* by default, the label is positioned at the top */
    transform: translate(0, 1.5px) !important;
  }

  /* normal input */
  .MuiInputBase-input {
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
      color: #192a3e;
    }
  }

  /* with icons */
  .MuiInputAdornment-root {
    width: 36px;
    height: 100%;
    padding: 6px 0;
    margin: 0;
  }

  /* input underline */
  .MuiInput-underline {
    &::before,
    &::after {
      border-bottom-color: #d3d8dd;
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #d3d8dd;
    }
  }

  /* edit mode */
  .Mui-focused {
    .MuiInputBase-input {
      background: #ebeff2;
    }

    .MuiInputAdornment-root {
      background: #ebeff2;
    }

    &.MuiInput-underline::after {
      border-bottom: 1px solid #818e9b;
    }
  }

  /* naked input */
  &.MuiInput-input--naked {
    /* remove underline */
    .MuiInput-underline {
      &::before,
      &::after {
        border: none;
      }

      &:hover:not(.Mui-disabled):before {
        border: none;
      }
    }

    /* naked - edit mode */
    .Mui-focused {
      color: ${({ theme }) => theme.colors.gray};

      .MuiInputBase-input {
        background: transparent;
      }

      .MuiInputAdornment-root {
        background: transparent;
      }

      &.MuiInput-underline::after {
        border: none;
      }
    }
  }
`;

const ThemedStyledTextField = withTheme(StyledTextField);

setPropTypes("DryTextField", [TextField, DryTextField], ThemedStyledTextField);

export default ThemedStyledTextField;
