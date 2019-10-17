import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Menu } from "@material-ui/core";
import { withTheme } from "theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: 0,
    border: "1px solid #EBEFF2",
    overflowX: "inherit",
    overflowY: "inherit",
  },

  list: {
    width: ({ width = "100%" }) => `${width} !important`,
    padding: "0 !important",
  },
}));

function DryMenu(props) {
  const {
    className,
    ...restProps
  } = props;

  const classes = useStyles();
  const menuProps = {
    classes: { list: classes.list },
    PopoverClasses: { paper: classes.paper },
    elevation: 0,
    marginThreshold: 0,
    anchorReference: "anchorEl",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const clsxName = clsx(className, {
  });

  return (
    <Menu
      {...menuProps}
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