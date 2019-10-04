import React, { useState } from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

function DryButton(props) {
  const {
    className,
    disabled,
    disableRipple,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    ...restProps
  } = props;
  const [pressed, setPressed] = useState();
  const clsxName = clsx(className, {
    // "md-btn-primary": primary,
    // "md-btn-secondary": secondary,
    // "md-btn-tertiary": tertiary,
    // "md-btn--pressed": pressed,
    // "md-btn--disabled": disabled,
  });

  return (
    <Button
      {...restProps}
      disableRipple={disableRipple}
      disabled={disabled}
      className={clsxName}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    />
  );

  function handleMouseDown(...args) {
    setPressed(true);
    onMouseDown(...args);
  }

  function handleMouseUp(...args) {
    setPressed(false);
    onMouseUp(...args);
  }

  function handleMouseLeave(...args) {
    setPressed(false);
    onMouseLeave(...args);
  }
}

DryButton.defaultProps = {
  className: "",
  disabled: false,
  disableRipple: true,
  onMouseDown: () => {},
  onMouseUp: () => {},
  onMouseLeave: () => {},
};

DryButton.propTypes = {
  className: Proptypes.string,
  disabled: Proptypes.bool,
  disableRipple: Proptypes.bool,
  onMouseDown: Proptypes.func,
  onMouseUp: Proptypes.func,
  onMouseLeave: Proptypes.func,
};

const StyledButton = styled(DryButton)`
  &.MuiButtonBase-root {
    text-transform: none;
  }

  &.MuiButton-contained {
    box-shadow: none;

    &:hover,
    &:active {
      box-shadow: none;
    }
  }
  /* 
  // from figma
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  border-radius: 4px;

  // primary color
  &.md-btn-primary {
    color: #ffffff;
    background-color: #cf33f2;

    &.md-btn {
      &--hover {
        background-color: #9871cb;
      }

      &--pressed {
        background-color: #791fd2;
      }

      &--disabled {
        background-color: #c2cfe0;
      }
    }
  }

  // secondary color
  &.md-btn-secondary {
    color: #cf33f2;
    border: 1px solid #cf33f2;
    background-color: #ffffff;

    // from figma
    box-sizing: border-box;

    &.md-btn {
      &--hover {
        color: #9871cb;
        border: 1px solid #9871cb;
      }

      &--pressed {
        color: #791fd2;
        border: 1px solid #791fd2;
      }

      &--disabled {
        color: #c2cfe0;
        border: 1px solid #c2cfe0;
      }
    }
  }

  // tertiary color
  &.md-btn-tertiary {
    color: #cf33f2;
    background-color: transparent;

    &.md-btn {
      &--hover {
        color: #9871cb;
      }

      &--pressed {
        color: #791fd2;
      }

      &--disabled {
        color: #c2cfe0;
      }
    }
  } */
`;

export default StyledButton;
