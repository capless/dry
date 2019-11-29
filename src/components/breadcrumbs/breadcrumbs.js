import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Breadcrumbs } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledBreadcrumbs = styled(DryBreadcrumbs)`
 
`;

const ThemedDryBreadcrumbs = withTheme(StyledBreadcrumbs);

setPropTypes("DryBreadcrumbs", [Breadcrumbs, DryBreadcrumbs], ThemedDryBreadcrumbs);

export default ThemedDryBreadcrumbs;
