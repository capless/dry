import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import List from "@material-ui/core/List";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryList(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <List {...restProps} className={clsxName} />;
}

DryList.defaultProps = {
  className: ""
};

DryList.propTypes = {
  className: PropTypes.string
};

const StyledList = styled(DryList)`
  &.MuiList-root {
    /* list item */
    .MuiListItem-root {
      color: #334d6e;

      /* list item selected */
      &.Mui-selected {
        color: #5cc64c;
        background-color: transparent;

        /* svg icon */
        .MuiSvgIcon-root {
          fill: #5cc64c !important;
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
          fill: #c2cfe0;
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
