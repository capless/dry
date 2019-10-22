import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { withTheme } from "theme";

function DryPaper(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Paper
      {...restProps}
      className={clsxName}
    />
  );
}

DryPaper.defaultProps = {
  className: "",

};

DryPaper.propTypes = {
  className: Proptypes.string,

};

const StyledPaper = styled(DryPaper)`
  &.MuiPaper-root {
    padding: 1rem;
    background: #FFFFFF;
    box-shadow: 11px 14px 50px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    /* animation */
    -webkit-transition: background .5s;
    transition: background .5s;

    &:hover {
      background: #5CC64C;
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.32);
      border-radius: 4px;

      /* animation */
      -webkit-transition: background .5s;
      transition: background .5s;
    }
  }
`;

export default withTheme(StyledPaper);
