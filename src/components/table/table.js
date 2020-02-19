import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryTable(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <Table {...restProps} className={clsxName} />;
}

DryTable.defaultProps = {
  className: ""
};

DryTable.propTypes = {
  className: PropTypes.string
};

const StyledTable = styled(DryTable)`
  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &.MuiTable-root {
    /* Table Head (th) */
    .MuiTableHead-root {
      .MuiTableCell-root {
        span:not([class]) {
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 15px;
          letter-spacing: 0.01em;
          color: #334d6e;
          opacity: 0.5;
        }
      }

      .MuiTableCell-alignRight {
        flex-direction: row;
      }
    }

    /* Table Row (tr) */
    .MuiTableRow-root {
      background: #ffffff;
    }

    /* Table Cell (td) */
    .MuiTableCell-root {
      &.primary {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #334d6e;
      }
    }

    /* Table Body (tbody) */
    .MuiTableBody-root {
      .MuiTableRow-root.selected,
      .MuiTableRow-root:hover {
        background: #ebeff2;
      }
    }
  }
`;

const ThemedStyledTable = withTheme(StyledTable);

setPropTypes("DryTable", [Table, DryTable], ThemedStyledTable);

export default ThemedStyledTable;
