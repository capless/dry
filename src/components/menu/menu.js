import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Menu } from "@material-ui/core";
import { withTheme } from "theme";

function DryMenu(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Menu
      {...restProps}
      className={clsxName}
    />
  );
}

DryMenu.defaultProps = {
  className: "",

};

DryMenu.propTypes = {
  className: Proptypes.string,

};

const StyledMenu = styled(DryMenu)`
 
`;

export default withTheme(StyledMenu);
