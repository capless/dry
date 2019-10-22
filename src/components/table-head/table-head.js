import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableHead } from "@material-ui/core";
import { withTheme } from "theme";

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
  className: Proptypes.string,

};

const StyledTableHead = styled(DryTableHead)`
 
`;

export default withTheme(StyledTableHead);
