import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { List } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

function DryList(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <List
      {...restProps}
      className={clsxName}
    />
  );
}

DryList.defaultProps = {
  className: "",

};

DryList.propTypes = {
  className: PropTypes.string,

};

const StyledList = styled(DryList)`
  &.MuiList-root {
    /* list item */
    .MuiListItem-root {
      color: #334D6E;
      
      /* list item selected */
      &.Mui-selected {
        color: #5CC64C;
        background-color: transparent;

        /* svg icon */
        .MuiSvgIcon-root {
          fill: #5CC64C !important;
        }
      }

      /* list item text */
      .MuiListItemText-root {
        .MuiTypography-root {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.01em;
        }
      }

      /* list item icon */
      .MuiListItemIcon-root {
        min-width: 36.5px;

        /* svg icon */
        .MuiSvgIcon-root {
          fill: #C2CFE0;
        }
      }
    }

    /* divider */
    .MuiDivider-root {
      height: 0;
      margin: 26px 0;
    }
  }
`;

const ThemedStyledList = withTheme(StyledList);

setPropTypes("DryList", [List, DryList], ThemedStyledList);

export default ThemedStyledList;
