import React from "react"
import ReactDOM from "react-dom"
import Root from "./modules/Root"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "./index.css"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById("root")
)
