import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormGroup } from "@material-ui/core";
import { withTheme } from "theme";

function DryFormGroup(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <FormGroup
      {...restProps}
      className={clsxName}
    />
  );
}

DryFormGroup.defaultProps = {
  className: "",

};

DryFormGroup.propTypes = {
  className: Proptypes.string,

};

const StyledFormGroup = styled(DryFormGroup)`
 
`;

export default withTheme(StyledFormGroup);
