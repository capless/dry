import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

function DryIconButton(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <IconButton
      {...restProps}
      className={clsxName}
    />
  );
}

DryIconButton.defaultProps = {
  className: "",

};

DryIconButton.propTypes = {
  className: PropTypes.string,

};

const StyledIconButton = styled(DryIconButton)`
 
`;

const ThemedStyledIconButton = withTheme(StyledIconButton);

setPropTypes("DryIconButton", [IconButton, DryIconButton], ThemedStyledIconButton);

export default ThemedStyledIconButton;
