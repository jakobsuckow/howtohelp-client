import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../../Home/home"
import AddHelp from "../../AddHelp/addHelp"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add-help" exact component={AddHelp} />
    </Switch>
  </Router>
)

export default AppRouter
