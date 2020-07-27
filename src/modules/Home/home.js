import React from "react"
import Map from "../../components/map/map"
import SpeedDials from "../../components/button/speedDials"
import Drawer from "../../components/drawer/drawer"

const Home = () => {
  return (
    <>
      <Drawer />
      <SpeedDials />
      <Map />
    </>
  )
}

export default Home
