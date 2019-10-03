import React, { useState } from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Button } from "react-md";
import withDisabledInk from "hocs/withDisabledInk";

function DryButton(props) {
  const {
    flat,
    className,
    primary,
    tertiary,
    secondary,
    disabled,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    ...restProps
  } = props;
  const [pressed, setPressed] = useState();
  const clsxName = clsx(className, {
    "md-btn-primary": primary,
    "md-btn-secondary": secondary,
    "md-btn-tertiary": tertiary,
    "md-btn--pressed": pressed,
    "md-btn--disabled": disabled,
  });

  return (
    <Button
      {...restProps}
      flat={flat}
      primary={primary}
      secondary={secondary || tertiary}
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
  flat: true,
  disabled: false,
  primary: false,
  secondary: false,
  tertiary: false,
  onMouseDown: () => {},
  onMouseUp: () => {},
  onMouseLeave: () => {},
};

DryButton.propTypes = {
  className: Proptypes.string,
  flat: Proptypes.bool,
  disabled: Proptypes.bool,
  primary: Proptypes.bool,
  secondary: Proptypes.bool,
  tertiary: Proptypes.bool,
  onMouseDown: Proptypes.func,
  onMouseUp: Proptypes.func,
  onMouseLeave: Proptypes.func,
};

const DryButtonWithDisabledInk = withDisabledInk(DryButton);
const StyledButton = styled(DryButtonWithDisabledInk)`
  text-transform: none;

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
    color: #FFFFFF;
    background-color: #CF33F2;

    &.md-btn {
      &--hover {
        background-color: #9871CB;
      }

      &--pressed {
        background-color: #791FD2;
      }

      &--disabled {
        background-color: #C2CFE0;
      }
    }
  }

  // secondary color
  &.md-btn-secondary {
    color: #CF33F2;
    border: 1px solid #CF33F2;
    background-color: #FFFFFF;
    
    // from figma
    box-sizing: border-box;

    &.md-btn {
      &--hover {
        color: #9871CB;
        border: 1px solid #9871CB;
      }

      &--pressed {
        color: #791FD2;
        border: 1px solid #791FD2;
      }

      &--disabled {
        color: #C2CFE0;
        border: 1px solid #C2CFE0;
      }
    }
  }

  // tertiary color
  &.md-btn-tertiary {
    color: #CF33F2;
    background-color: transparent;
    
    &.md-btn {
      &--hover {
        color: #9871CB;
      }

      &--pressed {
        color: #791FD2;
      }

      &--disabled {
        color: #C2CFE0;
      }
    }
  }
`;

export default StyledButton;
