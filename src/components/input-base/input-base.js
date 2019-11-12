import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { InputBase } from "@material-ui/core";
import { withTheme } from "theme";

function DryInputBase(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <InputBase
      {...restProps}
      className={clsxName}
    />
  );
}

DryInputBase.defaultProps = {
  className: "",

};

DryInputBase.propTypes = {
  className: Proptypes.string,

};

const StyledInputBase = styled(DryInputBase)`
 
`;

export default withTheme(StyledInputBase);
