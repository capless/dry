import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import DialogActions from "@material-ui/core/DialogActions";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDialogActions(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <DialogActions {...restProps} className={clsxName} />;
}

DryDialogActions.defaultProps = {
  className: ""
};

DryDialogActions.propTypes = {
  className: PropTypes.string
};

const StyledDialogActions = styled(DryDialogActions)``;

const ThemedStyledDialogActions = withTheme(StyledDialogActions);

setPropTypes("DryDialogActions", DialogActions, ThemedStyledDialogActions);

export default ThemedStyledDialogActions;
