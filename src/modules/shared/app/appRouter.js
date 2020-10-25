import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Registration from "../../registration/registration"
import Home from "../../home/home"
import Playground from "../../playground/playground"
import useApi from "./useApi"

const AppRouter = () => {
  const center = [13.404954, 52.520008]
  const [cities, setCities] = React.useState([])
  const [getCitiesApi] = useApi("getCities")

  React.useEffect(() => {
    getCitiesApi().then((res) => {
      setCities(res.data)
    })
  }, [getCitiesApi, setCities])

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home center={center} />} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/playground" exact component={Playground} />
        {cities.map((city) => (
          <Route
            path={`/${city.name}`}
            exact
            component={() => <Home center={center} />}
            center={[city.longitude, city.latitude]}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default AppRouter
