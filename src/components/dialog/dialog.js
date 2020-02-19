import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDialog(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Dialog {...restProps} className={clsxName} />;
}

DryDialog.defaultProps = {
  className: ""
};

DryDialog.propTypes = {
  className: PropTypes.string
};

const StyledDialog = styled(DryDialog)``;

const ThemedStyledDialog = withTheme(StyledDialog);

setPropTypes("DryDialog", Dialog, ThemedStyledDialog);

export default ThemedStyledDialog;
