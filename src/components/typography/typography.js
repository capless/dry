import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { withTheme } from "theme";

function DryTypography(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Typography
      {...restProps}
      className={clsxName}
    />
  );
}

DryTypography.defaultProps = {
  className: "",

};

DryTypography.propTypes = {
  className: Proptypes.string,

};

const StyledTypography = styled(DryTypography)`
 
`;

export default withTheme(StyledTypography);
