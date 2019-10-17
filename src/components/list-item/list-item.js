import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";
import { withTheme } from "theme";

function DryListItem(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ListItem
      {...restProps}
      className={clsxName}
    />
  );
}

DryListItem.defaultProps = {
  className: "",
  button: true,
  disableRipple: true,
};

DryListItem.propTypes = {
  className: Proptypes.string,
  button: Proptypes.bool,
  disableRipple: Proptypes.bool,
};

const StyledListItem = styled(DryListItem)`
  &.MuiListItem-root {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: #334D6E;

    &.Mui-selected {
      color: #5CC64C;
      background-color: transparent;
    }
  }
`;

export default withTheme(StyledListItem);
