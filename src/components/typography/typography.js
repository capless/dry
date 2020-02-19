import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTypography(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Typography {...restProps} className={clsxName} />;
}

DryTypography.defaultProps = {
  className: ""
};

DryTypography.propTypes = {
  className: PropTypes.string
};

const StyledTypography = styled(DryTypography)``;

const ThemedStyledTypography = withTheme(StyledTypography);

setPropTypes(
  "DryTypography",
  [Typography, DryTypography],
  ThemedStyledTypography
);

export default ThemedStyledTypography;
