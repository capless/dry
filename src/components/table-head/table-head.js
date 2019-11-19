import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableHead } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

function DryTableHead(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <TableHead
      {...restProps}
      className={clsxName}
    />
  );
}

DryTableHead.defaultProps = {
  className: "",

};

DryTableHead.propTypes = {
  className: PropTypes.string,

};

const StyledTableHead = styled(DryTableHead)`
 
`;

const ThemedStyledTableHead = withTheme(StyledTableHead);

setPropTypes("DryTableHead", TableHead, ThemedStyledTableHead);

export default ThemedStyledTableHead;
