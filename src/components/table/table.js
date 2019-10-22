import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Table } from "@material-ui/core";
import { withTheme } from "theme";

function DryTable(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Table
      {...restProps}
      className={clsxName}
    />
  );
}

DryTable.defaultProps = {
  className: "",

};

DryTable.propTypes = {
  className: Proptypes.string,

};

const StyledTable = styled(DryTable)`
  &.MuiTable-root {
    background-color: #FFFFFF;
  }
`;

export default withTheme(StyledTable);
