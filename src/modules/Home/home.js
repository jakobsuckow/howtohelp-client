import React, { useEffect, useState } from "react"
import BigMap from "../shared/bigmap/bigmap"
import FloatingButton from "../shared/floatingbutton/floatingbutton"
import TopBar from "../shared/topbar/topbar"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "../shared/navbar/navbar"

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
  },
})

const Home = () => {
  const [coords, setCoords] = useState({ lat: 0, long: 0 })
  const classes = useStyles()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { lat, long } = position.coords
      setCoords({ lat: lat, long: long })
    })
  }, [navigator])

  return (
    <div className={classes.root}>
      <Navbar />
      <FloatingButton />
      <BigMap lat={coords.lat} long={coords.long} />
    </div>
  )
}

export default Home
