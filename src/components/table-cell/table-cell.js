import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableCell } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledTableCell = styled(DryTableCell)`
 
`;

const ThemedStyledTableCell = withTheme(StyledTableCell);

setPropTypes("DryTableCell", [TableCell, DryTableCell], ThemedStyledTableCell);

export default ThemedStyledTableCell;
