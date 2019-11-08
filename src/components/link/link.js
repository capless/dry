import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Link } from "@material-ui/core";
import { withTheme } from "theme";

function DryLink(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Link
      {...restProps}
      className={clsxName}
    />
  );
}

DryLink.defaultProps = {
  className: "",

};

DryLink.propTypes = {
  className: Proptypes.string,

};

const StyledLink = styled(DryLink)`
 
`;

export default withTheme(StyledLink);
