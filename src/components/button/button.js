import React, { useState } from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Button } from "react-md";
import withDisabledInk from "hocs/withDisabledInk";

function ButtonComponent(props) {
  const {
    className, flat, primary, secondary, disabled, onMouseDown, onMouseUp,
  } = props;
  const [pressed, setPressed] = useState();
  const clsxName = clsx(className, {
    "md-btn-primary": primary,
    "md-btn-secondary": secondary,
    "md-btn--pressed": pressed,
    "md-btn--disabled": disabled,
  });

  return (
    <Button
      {...props}
      flat={flat}
      primary={primary}
      secondary={secondary}
      disabled={disabled}
      className={clsxName}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );

  function handleMouseDown(e) {
    setPressed(true);
    onMouseDown(e);
  }

  function handleMouseUp(e) {
    setPressed(false);
    onMouseUp(e);
  }
}

ButtonComponent.defaultProps = {
  className: "",
  flat: true,
  disabled: false,
  primary: false,
  secondary: false,
  onMouseDown: () => {},
  onMouseUp: () => {},
};

ButtonComponent.propTypes = {
  className: Proptypes.string,
  flat: Proptypes.bool,
  disabled: Proptypes.bool,
  primary: Proptypes.bool,
  secondary: Proptypes.bool,
  onMouseDown: Proptypes.func,
  onMouseUp: Proptypes.func,
};

const ButtonComponentWithDisabledInk = withDisabledInk(ButtonComponent);
const StyledButton = styled(ButtonComponentWithDisabledInk)`
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
`;

export default StyledButton;
