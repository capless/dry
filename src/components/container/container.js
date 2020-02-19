import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryContainer(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Container {...restProps} className={clsxName} />;
}

DryContainer.defaultProps = {
  className: ""
};

DryContainer.propTypes = {
  className: PropTypes.string
};

const StyledContainer = styled(DryContainer)``;

const ThemedStyledContainer = withTheme(StyledContainer);

setPropTypes("DryContainer", Container, ThemedStyledContainer);

export default ThemedStyledContainer;
