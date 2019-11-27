import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Tab } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTab(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Tab
      {...restProps}
      className={clsxName}
    />
  );
}

DryTab.defaultProps = {
  className: "",

};

DryTab.propTypes = {
  className: PropTypes.string,

};

const StyledTab = styled(DryTab)`
 
`;

const ThemedStyledTab = withTheme(StyledTab);

setPropTypes("DryTab", Tab, ThemedStyledTab);

export default ThemedStyledTab;
