import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Tabs } from "@material-ui/core";
import { withTheme } from "theme";

function DryTabs(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Tabs
      {...restProps}
      className={clsxName}
    />
  );
}

DryTabs.defaultProps = {
  className: "",

};

DryTabs.propTypes = {
  className: Proptypes.string,

};

const StyledTabs = styled(DryTabs)`
  .MuiTabs-flexContainer {
    .MuiTab-root {
      border-right: 1px solid #C2CFE0;

      &:last-child {
        border-right: none;
      }
    }
  }

  /* tab item */
  .MuiTab-root {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #334D6E;
    text-transform: none;
    padding: 0;
    min-height: 16px;

    &.Mui-selected {
      font-weight: bold;
    }
  }
`;

export default withTheme(StyledTabs);
