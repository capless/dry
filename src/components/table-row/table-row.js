import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import TableRow from "@material-ui/core/TableRow";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTableRow(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <TableRow {...restProps} className={clsxName} />;
}

DryTableRow.defaultProps = {
  className: ""
};

DryTableRow.propTypes = {
  className: PropTypes.string
};

const StyledTableRow = styled(DryTableRow)``;

const ThemedStyledTableRow = withTheme(StyledTableRow);

setPropTypes("DryTableRow", [TableRow, DryTableRow], ThemedStyledTableRow);

export default ThemedStyledTableRow;
