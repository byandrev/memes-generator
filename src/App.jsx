import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
import theme from "./theme";

import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Discover from "./pages/Discover";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.body};
    font-size: ${(props) => props.theme.font.sizeBody};
  }
`;

function App() {
  const { mode } = useDarkMode();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme(mode)}>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/editor" component={Editor} />
          <Route path="/discover" component={Discover} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
