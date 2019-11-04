import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { withTheme } from "theme";

function DryLinearProgress(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <LinearProgress
      {...restProps}
      className={clsxName}
    />
  );
}

DryLinearProgress.defaultProps = {
  className: "",

};

DryLinearProgress.propTypes = {
  className: Proptypes.string,

};

const StyledLinearProgress = styled(DryLinearProgress)`
 
`;

export default withTheme(StyledLinearProgress);
