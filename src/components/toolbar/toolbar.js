import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryToolbar(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Toolbar {...restProps} className={clsxName} />;
}

DryToolbar.defaultProps = {
  className: ""
};

DryToolbar.propTypes = {
  className: PropTypes.string
};

const StyledToolbar = styled(DryToolbar)``;

const ThemedStyledToolbar = withTheme(StyledToolbar);

setPropTypes("DryToolbar", Toolbar, ThemedStyledToolbar);

export default ThemedStyledToolbar;
