import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../../home/home"
import Registration from "../../registration/registration"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  </Router>
)

export default AppRouter
