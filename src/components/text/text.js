import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { withTheme } from "theme";

function DryText(props) {
  const {
    className,
    children,
    component,
  } = props;
  const clsxName = clsx(className, component, {
  });

  switch (component) {
    case "h1":
      return <h1 className={clsxName}>{children}</h1>;
    case "h2":
      return <h2 className={clsxName}>{children}</h2>;
    case "h3":
      return <h3 className={clsxName}>{children}</h3>;
    default:
      return <p className={clsxName}>{children}</p>;
  }
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
  &.form-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #334D6E;
  }

  &.form-sub-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #334D6E;
  }
`;

export default withTheme(StyledText);
