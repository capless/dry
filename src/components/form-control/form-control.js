import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledFormControl = styled(DryFormControl)`
`;

const ThemedStyledFormControl = withTheme(StyledFormControl);

setPropTypes("DryFormControl", FormControl, ThemedStyledFormControl);

export default ThemedStyledFormControl;
