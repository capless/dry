import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { ListItemSecondaryAction } from "@material-ui/core";
import { withTheme } from "theme";

function DryListItemSecondaryAction(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ListItemSecondaryAction
      {...restProps}
      className={clsxName}
    />
  );
}

DryListItemSecondaryAction.defaultProps = {
  className: "",

};

DryListItemSecondaryAction.propTypes = {
  className: Proptypes.string,

};

const StyledListItemSecondaryAction = styled(DryListItemSecondaryAction)`
 
`;

export default withTheme(StyledListItemSecondaryAction);
