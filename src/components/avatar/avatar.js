import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import omit from "lodash/omit";
import Avatar from "@material-ui/core/Avatar";

const excludeProps = ["bordered"];

function DryAvatar(props) {
  const { role, ...restProps } = props;
  return <Avatar role={role} {...omit(restProps, excludeProps)} />;
}

DryAvatar.defaultProps = {
  role: "presentation",
};

DryAvatar.propTypes = {
  role: PropTypes.string,
};

const StyledDryAvatar = styled(DryAvatar)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ bordered }) => (bordered ? "2px solid #109CF1" : "none")};
`;

export default StyledDryAvatar;
