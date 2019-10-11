import React, { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function withTheme(WrappedComponent) {
  return forwardRef((props, ref) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent ref={ref} {...props} />
    </ThemeProvider>
  ));
}

export default withTheme;
