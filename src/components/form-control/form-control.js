import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { withTheme } from "theme";

function DryFormControl(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <FormControl
      {...restProps}
      className={clsxName}
    />
  );
}

DryFormControl.defaultProps = {
  className: "",

};

DryFormControl.propTypes = {
  className: Proptypes.string,

};

const StyledFormControl = styled(DryFormControl)`
`;

export default withTheme(StyledFormControl);
