import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryListItemText(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <ListItemText {...restProps} className={clsxName} />;
}

DryListItemText.defaultProps = {
  className: ""
};

DryListItemText.propTypes = {
  className: PropTypes.string
};

const StyledListItemText = styled(DryListItemText)`
  .MuiTypography-colorTextSecondary {
    font-weight: normal !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.4px;
    color: #99a6b7;
  }
`;

const ThemedStyledListItemText = withTheme(StyledListItemText);

setPropTypes(
  "DryListItemText",
  [ListItemText, DryListItemText],
  ThemedStyledListItemText
);

export default ThemedStyledListItemText;
