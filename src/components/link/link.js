import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Link } from "@material-ui/core";
import { withTheme } from "theme";
import setPropTypes from "utils/setPropTypes";

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
  className: PropTypes.string,

};

const StyledLink = styled(DryLink)`
 
`;

const ThemedStyledLink = withTheme(StyledLink);

setPropTypes("DryLink", DryLink, ThemedStyledLink);

export default ThemedStyledLink;
