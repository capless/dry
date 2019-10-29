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
  .MuiTypography-colorTextSecondary {
    font-weight: normal !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.4px;
    color: #99A6B7;
  }
`;

export default withTheme(StyledListItemText);
