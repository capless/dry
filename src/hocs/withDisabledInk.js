import React, { PureComponent } from "react";
import PropTypes from "prop-types";

function withDisabledInk(WrappedComponent) {
  class DisablingInk extends PureComponent {
    static ;

    getChildContext() {
      return { inkDisabled: true };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  DisablingInk.childContextTypes = {
    inkDisabled: PropTypes.bool,
  };

  return DisablingInk;
}

export default withDisabledInk;
