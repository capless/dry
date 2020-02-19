import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

const DryIconButton = forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <IconButton {...restProps} ref={ref} className={clsxName} />;
});

DryIconButton.defaultProps = {
  className: ""
};

DryIconButton.propTypes = {
  className: PropTypes.string
};

const StyledIconButton = styled(DryIconButton)``;

const ThemedStyledIconButton = withTheme(StyledIconButton);

setPropTypes(
  "DryIconButton",
  [IconButton, DryIconButton],
  ThemedStyledIconButton
);

export default ThemedStyledIconButton;
