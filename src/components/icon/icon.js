import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import omit from "lodash/omit";
import styled from "styled-components";

const excludeProps = ["color"];

function DryIcon(props) {
  const {
    component: IconComponent, className, fontSize, ...restProps
  } = props;
  const clsxName = clsx(className, {
    [`${fontSize}`]: fontSize && isCustomFontSize(fontSize),
  });

  return (
    <IconComponent
      className={clsxName}
      fontSize={isCustomFontSize(fontSize) ? undefined : fontSize}
      {...(omit(restProps, excludeProps))}
    />
  );
}

function isCustomFontSize(fontSize) {
  return ["xlarge", "xxlarge"].includes(fontSize);
}

DryIcon.defaultProps = {
  className: "",
  fontSize: "default",
};

DryIcon.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.oneOf([
    "inherit", "default", "small", "large", "xlarge", "xxlarge",
  ]),
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

    &.xlarge {
      font-size: 2.5rem;
    }

    &.xxlarge {
      font-size: 3rem;
    }
  }
`;

export default StyledDryIcon;
