import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormLabel } from "@material-ui/core";
import { withTheme } from "theme";

function DryFormLabel(props) {
  const {
    className,
    variant,
    ...restProps
  } = props;
  const clsxName = clsx(className, {
    [`MuiFormLabel-root--${variant}`]: variant,
  });

  return (
    <FormLabel
      {...restProps}
      className={clsxName}
    />
  );
}

DryFormLabel.defaultProps = {
  className: "",
  variant: "normal",
};

DryFormLabel.propTypes = {
  className: Proptypes.string,
  variant: Proptypes.oneOf([
    "small",
    "normal",
  ]),
};

const StyledFormLabel = styled(DryFormLabel)`
  &.MuiFormLabel-root {
    font-style: normal;
    font-weight: normal;
    color: #90A0B7;

    &--small {
      font-size: 12px;
    }
  }
`;

export default withTheme(StyledFormLabel);
