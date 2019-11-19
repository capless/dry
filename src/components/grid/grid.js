import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

function DryGrid(props) {
  const {
    className,
    textAlign,
    ...restProps
  } = props;
  const clsxName = clsx(className, {
    textAlign,
  });

  return (
    <Grid
      {...restProps}
      className={clsxName}
    />
  );
}

DryGrid.defaultProps = {
  className: "",
  textAlign: "",
};

DryGrid.propTypes = {
  className: PropTypes.string,
  textAlign: PropTypes.string,
};

const StyledGrid = styled(DryGrid)`
  &.MuiGrid-root {
    text-align: ${({ textAlign }) => textAlign};
  }
`;

const ThemedStyledGrid = withTheme(StyledGrid);

setPropTypes("DryGrid", Grid, ThemedStyledGrid);

export default ThemedStyledGrid;
