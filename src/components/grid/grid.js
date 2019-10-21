import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { withTheme } from "theme";

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
  className: Proptypes.string,
  textAlign: Proptypes.string,
};

const StyledGrid = styled(DryGrid)`
  &.MuiGrid-root {
    text-align: ${({ textAlign }) => textAlign};
  }
`;

export default withTheme(StyledGrid);
