import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableCell } from "@material-ui/core";
import { withTheme } from "theme";

function DryTableCell(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <TableCell
      {...restProps}
      className={clsxName}
    />
  );
}

DryTableCell.defaultProps = {
  className: "",

};

DryTableCell.propTypes = {
  className: Proptypes.string,

};

const StyledTableCell = styled(DryTableCell)`
 
`;

export default withTheme(StyledTableCell);
