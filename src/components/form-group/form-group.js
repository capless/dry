import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormGroup } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledFormGroup = styled(DryFormGroup)`
 
`;

const ThemedStyledFormGroup = withTheme(StyledFormGroup);

setPropTypes("DryFormGroup", FormGroup, ThemedStyledFormGroup);

export default ThemedStyledFormGroup;
