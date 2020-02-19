import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDialogTitle(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <DialogTitle {...restProps} className={clsxName} />;
}

DryDialogTitle.defaultProps = {
  className: ""
};

DryDialogTitle.propTypes = {
  className: PropTypes.string
};

const StyledDialogTitle = styled(DryDialogTitle)``;

const ThemedStyledDialogTitle = withTheme(StyledDialogTitle);

setPropTypes("DryDialogTitle", DialogTitle, ThemedStyledDialogTitle);

export default ThemedStyledDialogTitle;
