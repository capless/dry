import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryPaper(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Paper
      {...restProps}
      className={clsxName}
    />
  );
}

DryPaper.defaultProps = {
  className: "",

};

DryPaper.propTypes = {
  className: PropTypes.string,

};

const StyledPaper = styled(DryPaper)`
  &.MuiPaper-root {
    padding: 1rem;
    background: #FFFFFF;
    box-shadow: 11px 14px 50px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
`;

const ThemedStyledPaper = withTheme(StyledPaper);

setPropTypes("DryPaper", [Paper, DryPaper], ThemedStyledPaper);

export default ThemedStyledPaper;
