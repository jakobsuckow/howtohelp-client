import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Registration from "../../registration/registration"
import Start from "../../start/start"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  </Router>
)

export default AppRouter
