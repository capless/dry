import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Collapse } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryCollapse(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Collapse
      {...restProps}
      className={clsxName}
    />
  );
}

DryCollapse.defaultProps = {
  className: "",

};

DryCollapse.propTypes = {
  className: PropTypes.string,

};

const StyledCollapse = styled(DryCollapse)`
 
`;

const ThemedStyledCollapse = withTheme(StyledCollapse);

setPropTypes("DryCollapse", Collapse, ThemedStyledCollapse);

export default ThemedStyledCollapse;
