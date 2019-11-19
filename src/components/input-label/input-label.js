import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { InputLabel } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

const DryInputLabel = forwardRef((props, ref) => {
  const {
    className,
    label,
    value,
    rightIcon,
    ...restProps
  } = props;
  const clsxName = clsx(className, {
    [`MuiSelect-label--flex`]: label && value,
  });

  return (
    <InputLabel
      {...restProps}
      ref={ref}
      className={clsxName}
    >
      {label && <div className="label">{label}</div>}
      {value && <div className="value">{value}</div>}
      {value && <div className="rightIcon">{rightIcon}</div>}
    </InputLabel>
  );
});

DryInputLabel.defaultProps = {
  className: "",
  label: null,
  value: null,
  rightIcon: null,
};

DryInputLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  rightIcon: PropTypes.node,
};

const StyledInputLabel = styled(DryInputLabel)`
  &.MuiSelect-label--flex {
    display: flex;
    align-items: center;
    
    .value {
      margin: 0 5px;
      color: ${({ theme }) => theme.colors.deepPink};
      cursor: pointer;
    }

    .rightIcon {
      margin-left: 5px;
      color: #AEAEAE;
      cursor: pointer;
    }
  }
`;

const ThemedStyledInputLabel = withTheme(StyledInputLabel);

setPropTypes("DryInputLabel", DryInputLabel, ThemedStyledInputLabel);

export default ThemedStyledInputLabel;
