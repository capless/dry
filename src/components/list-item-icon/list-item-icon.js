import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled, { css } from "styled-components";
import { ListItemIcon } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledListItemIcon = styled(DryListItemIcon)`
  &.MuiListItemIcon-root {
    ${({ margin }) => margin && css`
      margin: ${margin};
    `}
  }
`;

const ThemedStyledListItemIcon = withTheme(StyledListItemIcon);

setPropTypes("DryListItemIcon", [ListItemIcon, DryListItemIcon], ThemedStyledListItemIcon);

export default ThemedStyledListItemIcon;
