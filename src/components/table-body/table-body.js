import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableBody } from "@material-ui/core";
import { withTheme } from "theme";

function DryTableBody(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <TableBody
      {...restProps}
      className={clsxName}
    />
  );
}

DryTableBody.defaultProps = {
  className: "",

};

DryTableBody.propTypes = {
  className: Proptypes.string,

};

const StyledTableBody = styled(DryTableBody)`
 
`;

export default withTheme(StyledTableBody);
