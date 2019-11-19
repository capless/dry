import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { TableSortLabel } from "@material-ui/core";
import { withTheme } from "theme";
import { ArrowDropDown } from "icons";
import setPropTypes from "utils/setPropTypes";

function DryTableSortLabel(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <TableSortLabel
      {...restProps}
      className={clsxName}
    />
  );
}

DryTableSortLabel.defaultProps = {
  className: "",
  IconComponent: ArrowDropDown,
};

DryTableSortLabel.propTypes = {
  className: PropTypes.string,
  IconComponent: PropTypes.elementType,
};

const StyledTableSortLabel = styled(DryTableSortLabel)`
  &.MuiTableSortLabel-root {
    &.MuiTableSortLabel-active {
      /* Icon */
      .MuiTableSortLabel-icon {
        color: inherit;
      }
    }

    /* Icon */
    .MuiTableSortLabel-icon {
      opacity: 1;
      color: #AEAEAE;
    }
  }
`;

const ThemedStyledTableSortableLabel = withTheme(StyledTableSortLabel);

setPropTypes("DryTableSortableLabel", [TableSortLabel, DryTableSortLabel], ThemedStyledTableSortableLabel);

export default ThemedStyledTableSortableLabel;
