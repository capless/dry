import React from "react";
import PropTypes from "prop-types";
import omit from "lodash/omit";
import styled from "styled-components";

const excludeProps = ["color"];

function DryIcon(props) {
  const { component: IconComponent, ...restProps } = props;
  return <IconComponent {...(omit(restProps, excludeProps))} />;
}

DryIcon.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      type: PropTypes.shape({
        render: PropTypes.func,
      }),
    }),
  ]).isRequired,
};

const StyledDryIcon = styled(DryIcon)`
  &.MuiSvgIcon-root {
    color: ${({ color }) => color};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  }
`;

export default StyledDryIcon;
