import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { type, onClick, children } = props;
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
