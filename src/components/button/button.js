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
    "MuiButton--pressed": pressed,
    "MuiButton--disabled": disabled,
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
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.01em;
  }

  &.MuiButton-contained {
    box-shadow: none;

    &:hover,
    &:active {
      box-shadow: none;
    }
  }
  
  /* primary color */
  &.MuiButton-containedPrimary {
    color: #ffffff;
    background-color: #cf33f2;

    &:hover {
      background-color: #9871cb;
    }

    &.MuiButton--pressed {
      background-color: #791fd2;
    }

    &.MuiButton--disabled {
      background-color: #c2cfe0;
      color: #FFFFFF;
      opacity: 0.8;
    }
  }

  /* secondary color */
  &.MuiButton-outlinedSecondary {
    color: #CF33F2;
    background-color: #FFFFFF;
    border: 1px solid #CF33F2;
    box-sizing: border-box;

    &:hover {
      color: #9871CB;
      background-color: #FFFFFF;
      border: 1px solid #9871CB;
    }

    &.MuiButton--pressed {
      color: #791FD2;
      background-color: #FFFFFF;
      border: 1px solid #791FD2;
    }

    &.MuiButton--disabled {
      color: #C2CFE0;
      background-color: #FFFFFF;
      border: 1px solid #C2CFE0;
    }
  }

  /* tertiary / default color */
  &.MuiButton-text {
    color: #CF33F2;
    background-color: transparent;

    &:hover {
      color: #9871CB;
      background-color: transparent;
    }

    &.MuiButton--pressed {
      color: #791FD2;
      background-color: transparent;
    }

    &.MuiButton--disabled {
      color: #C2CFE0;
      background-color: transparent;
    }
  }
`;

export default StyledButton;
