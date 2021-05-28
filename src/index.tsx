import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26A69A",
    },
  },
});

// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = (Comp: Function) => {
    renderMethod(
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Comp />
        </AppContainer>
      </MuiThemeProvider>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
