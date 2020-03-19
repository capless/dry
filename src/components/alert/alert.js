import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Alert from "@material-ui/lab/Alert";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryAlert(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Alert {...restProps} className={clsxName} />;
}

DryAlert.defaultProps = {
  className: ""
};

DryAlert.propTypes = {
  className: PropTypes.string
};

const StyledAlert = styled(DryAlert)``;

const ThemedStyledAlert = withTheme(StyledAlert);

setPropTypes("DryAlert", Alert, ThemedStyledAlert);

export default ThemedStyledAlert;
