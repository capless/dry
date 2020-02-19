import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryLinearProgress(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <LinearProgress {...restProps} className={clsxName} />;
}

DryLinearProgress.defaultProps = {
  className: ""
};

DryLinearProgress.propTypes = {
  className: PropTypes.string
};

const StyledLinearProgress = styled(DryLinearProgress)``;

const ThemedStyledLinearProgress = withTheme(StyledLinearProgress);

setPropTypes(
  "DryLinearProgress",
  [LinearProgress, DryLinearProgress],
  ThemedStyledLinearProgress
);

export default ThemedStyledLinearProgress;
