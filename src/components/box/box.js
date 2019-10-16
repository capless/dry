import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { withTheme } from "theme";

function DryBox(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Box
      {...restProps}
      className={clsxName}
    />
  );
}

DryBox.defaultProps = {
  className: "",

};

DryBox.propTypes = {
  className: Proptypes.string,

};

const StyledBox = styled(DryBox)`
 
`;

export default withTheme(StyledBox);
