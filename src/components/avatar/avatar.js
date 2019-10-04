import React from "react";
import PropTypes from "prop-types";
import omit from "lodash/omit";
import styled, { css } from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const excludeProps = ["bordered", "showBackdrop", "backdropImage"];

function DryAvatar(props) {
  const { role, ...restProps } = props;
  return <Avatar role={role} {...omit(restProps, excludeProps)} />;
}

DryAvatar.defaultProps = {
  role: "presentation",
  showBackdrop: false,
  backdropImage: "/images/avatar-backdrop-image.png",
};

DryAvatar.propTypes = {
  role: PropTypes.string,
  showBackdrop: PropTypes.bool,
  backdropImage: PropTypes.string,
};

const StyledDryAvatar = styled(DryAvatar)`
  &.MuiAvatar-root {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border: ${({ bordered }) => (bordered ? "2px solid #109CF1" : "none")};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  }

  ${({ showBackdrop }) => showBackdrop && css`
    &.MuiAvatar-root:before {
        content: "";
        background-color: black;
        opacity: 0;
        -webkit-transition: all .3s;
        transition: all .3s;
      }

      &.MuiAvatar-root:hover:before {
        content: "";
        background-image: url(${({ backdropImage }) => backdropImage});
        display: block;
        position: absolute;
        background-size: contain;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        opacity: .5;
        background-color: black;
      }
  `}
`;

StyledDryAvatar.defaultProps = DryAvatar.defaultProps;
StyledDryAvatar.propTypes = DryAvatar.propTypes;

export default StyledDryAvatar;
