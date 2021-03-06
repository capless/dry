import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryListItemSecondaryAction(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <ListItemSecondaryAction {...restProps} className={clsxName} />;
}

DryListItemSecondaryAction.defaultProps = {
  className: ""
};

DryListItemSecondaryAction.propTypes = {
  className: PropTypes.string
};

const StyledListItemSecondaryAction = styled(DryListItemSecondaryAction)``;

const ThemedStyledListItemSecondaryAction = withTheme(
  StyledListItemSecondaryAction
);

setPropTypes(
  "DryListItemSecondaryAction",
  [ListItemSecondaryAction, DryListItemSecondaryAction],
  ThemedStyledListItemSecondaryAction
);

export default ThemedStyledListItemSecondaryAction;
