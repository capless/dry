import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableBody } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledTableBody = styled(DryTableBody)`
 
`;

const ThemedStyledTableBody = withTheme(StyledTableBody);

setPropTypes("DryTableBody", [TableBody, DryTableBody], ThemedStyledTableBody);

export default ThemedStyledTableBody;
