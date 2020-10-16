import React from "react"
import Map from "../../components/map/map"
import SpeedDials from "../../components/button/speedDials"
import Overlay from "../../components/overlay/overlay"
import GlobalDataProvider from "../shared/app/globalDataProvider"

const Home = () => {
  return (
    <GlobalDataProvider>
      <Overlay />
      <SpeedDials />
      {!process.env.NODE_ENV === "development" && <Map />}
    </GlobalDataProvider>
  )
}

export default Home
