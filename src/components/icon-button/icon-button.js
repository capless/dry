import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { withTheme } from "theme";

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
  className: Proptypes.string,

};

const StyledIconButton = styled(DryIconButton)`
 
`;

export default withTheme(StyledIconButton);
