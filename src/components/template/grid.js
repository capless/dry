import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { withTheme } from "theme";

function DryGrid(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

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

};

DryGrid.propTypes = {
  className: PropTypes.string,

};

const StyledGrid = styled(DryGrid)`
 
`;

export default withTheme(StyledGrid);
