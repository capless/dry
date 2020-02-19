import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDrawer(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Drawer {...restProps} className={clsxName} />;
}

DryDrawer.defaultProps = {
  className: ""
};

DryDrawer.propTypes = {
  className: PropTypes.string
};

const StyledDrawer = styled(DryDrawer)``;

const ThemedStyledDrawer = withTheme(StyledDrawer);

setPropTypes("DryDrawer", Drawer, ThemedStyledDrawer);

export default ThemedStyledDrawer;
