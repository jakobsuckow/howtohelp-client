import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
import dotenv from "dotenv"
dotenv.config()



export default function BigMap() {
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
        mapboxApiAccessToken={process.env.MAP_GL_KEY}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      ></ReactMapGL>
    </div>
  )
}
