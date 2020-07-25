import React from "react"
import ReactDOM from "react-dom"
import Root from "./root"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
)
