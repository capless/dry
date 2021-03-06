import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import TableBody from "@material-ui/core/TableBody";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTableBody(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <TableBody {...restProps} className={clsxName} />;
}

DryTableBody.defaultProps = {
  className: ""
};

DryTableBody.propTypes = {
  className: PropTypes.string
};

const StyledTableBody = styled(DryTableBody)``;

const ThemedStyledTableBody = withTheme(StyledTableBody);

setPropTypes("DryTableBody", [TableBody, DryTableBody], ThemedStyledTableBody);

export default ThemedStyledTableBody;
