import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function withTheme(WrappedComponent) {
  return (props) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );
}

export default withTheme;
