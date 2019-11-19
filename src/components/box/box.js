import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledBox = styled(DryBox)`
 
`;

const ThemedStyledBox = withTheme(StyledBox);

setPropTypes("DryBox", Box, ThemedStyledBox);

export default ThemedStyledBox;
