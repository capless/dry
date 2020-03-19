import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DrySnackbarContent(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <SnackbarContent {...restProps} className={clsxName} />;
}

DrySnackbarContent.defaultProps = {
  className: ""
};

DrySnackbarContent.propTypes = {
  className: PropTypes.string
};

const StyledSnackbarContent = styled(DrySnackbarContent)``;

const ThemedStyledSnackbarContent = withTheme(StyledSnackbarContent);

setPropTypes(
  "DrySnackbarContent",
  SnackbarContent,
  ThemedStyledSnackbarContent
);

export default ThemedStyledSnackbarContent;
