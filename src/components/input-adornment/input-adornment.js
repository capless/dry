import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { InputAdornment } from "@material-ui/core";
import { withTheme } from "theme";

function DryInputAdornment(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <InputAdornment
      {...restProps}
      className={clsxName}
    />
  );
}

DryInputAdornment.defaultProps = {
  className: "",

};

DryInputAdornment.propTypes = {
  className: Proptypes.string,

};

const StyledInputAdornment = styled(DryInputAdornment)`
 
`;

export default withTheme(StyledInputAdornment);
