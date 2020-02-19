import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import DialogContentText from "@material-ui/core/DialogContentText";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDialogContentText(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <DialogContentText {...restProps} className={clsxName} />;
}

DryDialogContentText.defaultProps = {
  className: ""
};

DryDialogContentText.propTypes = {
  className: PropTypes.string
};

const StyledDialogContentText = styled(DryDialogContentText)``;

const ThemedStyledDialogContentText = withTheme(StyledDialogContentText);

setPropTypes(
  "DryDialogContentText",
  DialogContentText,
  ThemedStyledDialogContentText
);

export default ThemedStyledDialogContentText;
