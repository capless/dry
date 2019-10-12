import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core";
import { withTheme } from "theme";

function DryFormControlLabel(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <FormControlLabel
      {...restProps}
      className={clsxName}
    />
  );
}

DryFormControlLabel.defaultProps = {
  className: "",

};

DryFormControlLabel.propTypes = {
  className: Proptypes.string,

};

const StyledFormControlLabel = styled(DryFormControlLabel)`
 
`;

export default withTheme(StyledFormControlLabel);
