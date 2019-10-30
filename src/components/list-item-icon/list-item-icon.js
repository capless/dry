import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled, { css } from "styled-components";
import { ListItemIcon } from "@material-ui/core";
import { withTheme } from "theme";

function DryListItemIcon(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ListItemIcon
      {...restProps}
      className={clsxName}
    />
  );
}

DryListItemIcon.defaultProps = {
  className: "",

};

DryListItemIcon.propTypes = {
  className: Proptypes.string,

};

const StyledListItemIcon = styled(DryListItemIcon)`
  &.MuiListItemIcon-root {
    ${({ margin }) => margin && css`
      margin: ${margin};
    `}
  }
`;

export default withTheme(StyledListItemIcon);
