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
    pageSize,
    onChange,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <div className={clsxName}>
      <div className="goto-first rc-pagination-item">
        <a
          href="#"
          className="rc-pagination-item-link"
          onClick={(evt) => handlePageChange(1, evt)}
        />
      </div>
      <Pagination
        {...restProps}
        total={total}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
      <div className="goto-last rc-pagination-item">
        <a
          href="#"
          className="rc-pagination-item-link"
          onClick={(evt) => handlePageChange(total / pageSize, evt)}
        />
      </div>
    </div>
  );

  function handlePageChange(newPage, evt) {
    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }
    onChange(newPage);
  }
}

DryPagination.defaultProps = {
  className: "",
  locale: enLocale,
  pageSize: 10,
};

DryPagination.propTypes = {
  className: Proptypes.string,
  locale: Proptypes.object,
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
  }

  .goto-first {
    margin-left: 0;

    a:after {
      margin-top: -1px;
      content: "‹‹";
      display: block;
    }
  }

  .goto-last {
    margin-left: 8px;
    margin-right: 0;
    
    a:after {
      margin-top: -1px;
      content: "››";
      display: block;
    }
  }
`;

export default withTheme(StyledPagination);
