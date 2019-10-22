import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableRow } from "@material-ui/core";
import { withTheme } from "theme";

function DryTableRow(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <TableRow
      {...restProps}
      className={clsxName}
    />
  );
}

DryTableRow.defaultProps = {
  className: "",

};

DryTableRow.propTypes = {
  className: Proptypes.string,

};

const StyledTableRow = styled(DryTableRow)`
 
`;

export default withTheme(StyledTableRow);
