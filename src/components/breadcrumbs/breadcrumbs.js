import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Breadcrumbs } from "@material-ui/core";
import { withTheme } from "theme";

function DryBreadcrumbs(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Breadcrumbs
      {...restProps}
      className={clsxName}
    />
  );
}

DryBreadcrumbs.defaultProps = {
  className: "",

};

DryBreadcrumbs.propTypes = {
  className: Proptypes.string,

};

const StyledBreadcrumbs = styled(DryBreadcrumbs)`
 
`;

export default withTheme(StyledBreadcrumbs);
