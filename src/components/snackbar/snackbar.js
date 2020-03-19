import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DrySnackbar(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Snackbar {...restProps} className={clsxName} />;
}

DrySnackbar.defaultProps = {
  className: ""
};

DrySnackbar.propTypes = {
  className: PropTypes.string
};

const StyledSnackbar = styled(DrySnackbar)``;

const ThemedStyledSnackbar = withTheme(StyledSnackbar);

setPropTypes("DrySnackbar", Snackbar, ThemedStyledSnackbar);

export default ThemedStyledSnackbar;
