import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Tab } from "@material-ui/core";
import { withTheme } from "theme";

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
  className: Proptypes.string,

};

const StyledTab = styled(DryTab)`
 
`;

export default withTheme(StyledTab);
