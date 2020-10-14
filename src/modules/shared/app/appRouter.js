import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Registration from "../../registration/registration"
import Home from "../../home/home"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  </Router>
)

export default AppRouter
