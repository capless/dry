import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { InputAdornment } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledInputAdornment = styled(DryInputAdornment)`
 
`;

const ThemedStyledInputAdornment = withTheme(StyledInputAdornment);

setPropTypes("DryInputAdornment", DryInputAdornment, ThemedStyledInputAdornment);

export default ThemedStyledInputAdornment;
