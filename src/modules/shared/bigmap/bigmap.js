import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
require("dotenv").config()

export default function BigMap() {
  const token = process.env.MAP_GL_KEY
  console.log(token)
  const [viewport, setViewport] = useState({
    latitude: 52.520008,
    longitude: 13.404954,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`pk.eyJ1IjoiamFrb2JzdWNrb3ciLCJhIjoiY2s4M2pmeHo3MGI5bzNtbzVma2w3YTdkOCJ9.SoffMUvqxv6PTh5TYq20kA`}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      ></ReactMapGL>
    </div>
  )
}
