import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledFormControlLabel = styled(DryFormControlLabel)`
 
`;

const ThemedStyledFormControlLabel = withTheme(StyledFormControlLabel);

setPropTypes("DryFormControlLabel", DryFormControlLabel, ThemedStyledFormControlLabel);

export default ThemedStyledFormControlLabel;
