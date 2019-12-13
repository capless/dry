import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

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
};

DryListItem.propTypes = {
  className: PropTypes.string,
  button: PropTypes.bool,
};

const StyledListItem = styled(DryListItem)`
`;

const ThemedStyledListItem = withTheme(StyledListItem);

setPropTypes("DryListItem", [ListItem, DryListItem], ThemedStyledListItem);

export default ThemedStyledListItem;
