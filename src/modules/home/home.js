import React from "react"
import Map from "../../components/map/map"
import SpeedDials from "../../components/button/speedDials"
import Overlay from "../../modules/shared/overlay/overlay"
import GlobalDataProvider from "../shared/app/globalDataProvider"
import { Helmet } from "react-helmet"
import useApi from "../shared/app/useApi"

const Home = () => {
  const [getPinsByCenterApi] = useApi("getPinsByCenter")

  const [pins, setPins] = React.useState({
    type: "",
    features: [],
  })

  const [center] = React.useState([13.404954, 52.520008])

  React.useEffect(() => {
    const [longitude, latitude] = center
    getPinsByCenterApi({ latitude, longitude }).then((res) => {
      console.log(res)
      setPins({
        type: "FeatureCollection",
        features: res.data,
      })
    })
  }, [getPinsByCenterApi, center])
  return (
    <>
      <Helmet>
        <title>How to help | Home</title>
      </Helmet>
      <GlobalDataProvider>
        <Overlay />
        <SpeedDials />
        <Map data={pins} center={center} />
      </GlobalDataProvider>
    </>
  )
}

export default Home
