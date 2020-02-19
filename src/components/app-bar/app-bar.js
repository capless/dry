import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryAppBar(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <AppBar {...restProps} className={clsxName} />;
}

DryAppBar.defaultProps = {
  className: ""
};

DryAppBar.propTypes = {
  className: PropTypes.string
};

const StyledAppBar = styled(DryAppBar)``;

const ThemedStyledAppBar = withTheme(StyledAppBar);

setPropTypes("DryAppBar", AppBar, ThemedStyledAppBar);

export default ThemedStyledAppBar;
