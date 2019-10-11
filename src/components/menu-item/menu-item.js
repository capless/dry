import React, { forwardRef } from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { withTheme } from "theme";

const DryMenuItem = forwardRef((props, ref) => {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <MenuItem
      {...restProps}
      ref={ref}
      className={clsxName}
    />
  );
});

DryMenuItem.defaultProps = {
  className: "",

};

DryMenuItem.propTypes = {
  className: Proptypes.string,

};

const StyledMenuItem = styled(DryMenuItem)`
 
`;

export default withTheme(StyledMenuItem);
