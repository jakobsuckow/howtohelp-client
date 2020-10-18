import React from "react"
import Map from "../../components/map/map"
import SpeedDials from "../../components/button/speedDials"
import Overlay from "../../modules/shared/overlay/overlay"
import GlobalDataProvider from "../shared/app/globalDataProvider"
import { Helmet } from "react-helmet"

const Home = () => {
  const data = [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [15.22882, 44.1141],
      },
      properties: {
        id: 1,
        country: `DE`,
      },
    },
  ]
  return (
    <>
      <Helmet>
        <title>How to help | Home</title>
      </Helmet>
      <GlobalDataProvider>
        <Overlay />
        <SpeedDials />
        <Map data={data} />
      </GlobalDataProvider>
    </>
  )
}

export default Home
