import React from "react"
import Map from "../../components/map/map"
import SpeedDials from "../../components/button/speedDials"
import Overlay from "../../modules/shared/overlay/overlay"
import GlobalDataProvider from "../shared/app/globalDataProvider"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>How to help | Home</title>
      </Helmet>
      <GlobalDataProvider>
        <Overlay />
        <SpeedDials />
        {!process.env.NODE_ENV === "development" && <Map />}
      </GlobalDataProvider>
    </>
  )
}

export default Home
