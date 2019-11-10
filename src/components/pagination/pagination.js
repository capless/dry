/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Pagination from "rc-pagination";
import enLocale from "rc-pagination/lib/locale/en_US";
import { withTheme } from "theme";
import "rc-pagination/assets/index.css";

function DryPagination(props) {
  const {
    className,
    total,
    current,
    pageSize,
    onChange,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  const lastPage = Math.ceil(total / pageSize);
  const firstPage = 1;
  const isLastPage = current === lastPage;
  const isFirstPage = current === firstPage;

  return (
    <div className={clsxName}>
      <div
        title="First Page"
        className={clsx("pagination goto-first rc-pagination-item", isFirstPage && "rc-pagination-disabled")}
      >
        <a
          href="#"
          className="rc-pagination-item-link"
          onClick={gotoFirst}
        />
      </div>
      <Pagination
        {...restProps}
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
      <div
        title="Last Page"
        className={clsx("pagination goto-last rc-pagination-item", isLastPage && "rc-pagination-disabled")}
      >
        <a
          href="#"
          className="rc-pagination-item-link"
          onClick={gotoLast}
          disabled
        />
      </div>
    </div>
  );

  function gotoLast(evt) {
    evt.preventDefault();
    if (!isLastPage) {
      handlePageChange(lastPage);
    }
  }

  function gotoFirst(evt) {
    evt.preventDefault();
    if (!isFirstPage) {
      handlePageChange(firstPage);
    }
  }

  function handlePageChange(newPage) {
    onChange(newPage);
  }
}

DryPagination.defaultProps = {
  className: "",
  locale: enLocale,
  pageSize: 10,
  current: 1,
};

DryPagination.propTypes = {
  className: Proptypes.string,
  locale: Proptypes.object,
  current: Proptypes.number,
  pageSize: Proptypes.number,
  total: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired,
};

const StyledPagination = styled(DryPagination)`
  display: flex;

  .rc-pagination {
    margin: 0;
  }
  .rc-pagination-prev, .rc-pagination-next {
    background: #FFFFFF;
    border: none;
    outline: none;

    .rc-pagination-item-link a:after {
      cursor: pointer;
    }
  }

  .goto-first {
    margin-left: 0;

    &:hover {
      border-color: #D9D9D9;
    }

    a:after {
      margin-top: -1px;
      content: "‹‹";
      display: block;
    }
  }

  .goto-last {
    margin-left: 8px;
    margin-right: 0;

    &:hover {
      border-color: #D9D9D9;
    }
    
    a:after {
      margin-top: -1px;
      content: "››";
      display: block;
    }
  }

  .pagination {
    &.rc-pagination-disabled {
      &:hover {
        border-color: transparent;
      }

      .rc-pagination-item-link {
        color: #CCC;

        &:after {
          cursor: not-allowed;
        }
      }
    }
  }
`;

export default withTheme(StyledPagination);
