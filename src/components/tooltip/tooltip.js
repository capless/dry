import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Tooltip } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

const DryTooltip = forwardRef((props, ref) => {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Tooltip
      {...restProps}
      ref={ref}
      className={clsxName}
    />
  );
});

DryTooltip.defaultProps = {
  className: "",
};

DryTooltip.propTypes = {
  className: PropTypes.string,

};

const StyledTooltip = styled(DryTooltip)`
 
`;

const ThemedStyledTooltip = withTheme(StyledTooltip);

setPropTypes("DryTooltip", [Tooltip, DryTooltip], ThemedStyledTooltip);

export default ThemedStyledTooltip;
