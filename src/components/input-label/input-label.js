import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { InputLabel } from "@material-ui/core";
import { withTheme } from "theme";

function DryInputLabel(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <InputLabel
      {...restProps}
      className={clsxName}
    />
  );
}

DryInputLabel.defaultProps = {
  className: "",

};

DryInputLabel.propTypes = {
  className: Proptypes.string,

};

const StyledInputLabel = styled(DryInputLabel)`
 
`;

export default withTheme(StyledInputLabel);
