import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { withTheme } from "theme";

function DryCircularProgress(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <CircularProgress
      {...restProps}
      className={clsxName}
    />
  );
}

DryCircularProgress.defaultProps = {
  className: "",

};

DryCircularProgress.propTypes = {
  className: Proptypes.string,

};

const StyledCircularProgress = styled(DryCircularProgress)`
 
`;

export default withTheme(StyledCircularProgress);
