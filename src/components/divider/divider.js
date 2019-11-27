import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDivider(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Divider
      {...restProps}
      className={clsxName}
    />
  );
}

DryDivider.defaultProps = {
  className: "",

};

DryDivider.propTypes = {
  className: PropTypes.string,

};

const StyledDivider = styled(DryDivider)`
 
`;

const ThemedStyledDivider = withTheme(StyledDivider);

setPropTypes("DryDivider", [Divider, DryDivider], ThemedStyledDivider);

export default ThemedStyledDivider;
