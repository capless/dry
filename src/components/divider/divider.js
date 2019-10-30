import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { withTheme } from "theme";

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
  className: Proptypes.string,

};

const StyledDivider = styled(DryDivider)`
 
`;

export default withTheme(StyledDivider);
