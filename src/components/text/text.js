/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled, { css } from "styled-components";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

function DryText(props) {
  const {
    style,
    className,
    children,
    component,
  } = props;
  const clsxName = clsx(className, component, {
  });
  let element = null;

  switch (component) {
    case "h1":
      element = <h1 style={style} className={clsxName}>{children}</h1>;
      break;
    case "h2":
      element = <h2 style={style} className={clsxName}>{children}</h2>;
      break;
    case "h3":
      element = <h3 style={style} className={clsxName}>{children}</h3>;
      break;
    case "div":
      element = <div style={style} className={clsxName}>{children}</div>;
      break;
    case "span":
      element = <span style={style} className={clsxName}>{children}</span>;
      break;
    default:
      element = <p style={style} className={clsxName}>{children}</p>;
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
  style: null,
};

DryText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf([
    "h1", "h2", "h3", "p", "div", "span",
  ]),
};

const StyledText = styled(DryText)`
  /* defaults */
  font-family: Roboto;

  /* overrides */
  ${({ display }) => display && css`
    display: ${display} !important;
  `}
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
  ${({ background }) => background && css`
  background: ${background} !important;
  `}
  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign} !important;
  `}

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #334D6E;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #334D6E;
  }

  &.p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #707683;
  }
`;

const ThemedStyledText = withTheme(StyledText);

setPropTypes("DryText", Text, ThemedStyledText);

export default ThemedStyledText;
