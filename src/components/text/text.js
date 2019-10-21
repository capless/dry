import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled, { css } from "styled-components";
import { withTheme } from "theme";

function DryText(props) {
  const {
    className,
    children,
    component,
  } = props;
  const clsxName = clsx(className, component, {
  });
  let element = null;

  switch (component) {
    case "h1":
      element = <h1 className={clsxName}>{children}</h1>;
      break;
    case "h2":
      element = <h2 className={clsxName}>{children}</h2>;
      break;
    case "h3":
      element = <h3 className={clsxName}>{children}</h3>;
      break;
    default:
      element = <p className={clsxName}>{children}</p>;
      break;
  }

  return (
    <div className={clsxName}>
      {element}
    </div>
  );
}

DryText.defaultProps = {
  className: "",
  component: "p",
};

DryText.propTypes = {
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  component: Proptypes.oneOf([
    "h1", "h2", "h3", "p",
  ]),
};

const StyledText = styled(DryText)`
  /* overrides */
  ${({ margin }) => margin && css`
    margin: ${margin} !important;
  `}
  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize} !important;
  `}
  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight} !important;
  `}
  ${({ color }) => color && css`
    color: ${color} !important;
  `}

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #334D6E;
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #334D6E;
  }

  &.p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #707683;
  }
`;

export default withTheme(StyledText);
