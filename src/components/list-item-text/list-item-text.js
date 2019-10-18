import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { ListItemText } from "@material-ui/core";
import { withTheme } from "theme";

function DryListItemText(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ListItemText
      {...restProps}
      className={clsxName}
    />
  );
}

DryListItemText.defaultProps = {
  className: "",

};

DryListItemText.propTypes = {
  className: Proptypes.string,

};

const StyledListItemText = styled(DryListItemText)`
 
`;

export default withTheme(StyledListItemText);
