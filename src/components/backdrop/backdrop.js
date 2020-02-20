import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryBackdrop(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Backdrop {...restProps} className={clsxName} />;
}

DryBackdrop.defaultProps = {
  className: "",
};

DryBackdrop.propTypes = {
  className: PropTypes.string,
};

const StyledBackdrop = styled(DryBackdrop)``;

const ThemedStyledBackdrop = withTheme(StyledBackdrop);

setPropTypes("DryBackdrop", Backdrop, ThemedStyledBackdrop);

export default ThemedStyledBackdrop;
