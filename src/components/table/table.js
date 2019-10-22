import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Table } from "@material-ui/core";
import { withTheme } from "theme";

function DryTable(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Table
      {...restProps}
      className={clsxName}
    />
  );
}

DryTable.defaultProps = {
  className: "",

};

DryTable.propTypes = {
  className: Proptypes.string,

};

const StyledTable = styled(DryTable)`
  tr th:first-child, tr td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  tr th:last-child, tr td:last-child {
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
          color: #334D6E;
          opacity: 0.5;
        }
      }
    }
    
    /* Table Row (tr) */
    .MuiTableRow-root {
      background: #FFFFFF;
    }

    /* Table Cell (td) */
    .MuiTableCell-root {
      &.mainCell {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #334D6E;
      }
    }

    /* Table Body (tbody) */
    .MuiTableBody-root {
      .MuiTableRow-root.selected, .MuiTableRow-root:hover {
        background: #EBEFF2;
      }
    }
  }
`;

export default withTheme(StyledTable);
