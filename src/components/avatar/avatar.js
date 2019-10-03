import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Avatar } from "react-md";

function DryAvatar(props) {
  const { role, ...restProps } = props;
  return (
    <Avatar
      role={role}
      {...restProps}
    />
  );
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
