import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import { makeStyles } from "@material-ui/core/styles"
import "./map.scss"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm90YWxlbWVzYSIsImEiOiJjazhiOTZnb2gwM3NxM2ZucGp1Z21mNjZ0In0.Z4nS6wdB4WzflkDItyXSIQ"

const useStyles = makeStyles(() => ({
  mapContainer: {
    width: `100%`,
    height: `100%`,
  },
  mapBox: {
    width: `100%`,
    height: `100%`,
  },
}))

function Map() {
  const classes = useStyles()
  const mapboxElRef = useRef(null)

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

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: [10, 40],
      zoom: 3,
    })
    map.once(`load`, () => {
      map.addSource("points", {
        type: `geojson`,
        data: {
          type: `FeatureCollection`,
          features: data,
        },
      })
      map.addLayer({
        id: "circles",
        source: "points",
        type: "circle",
        paint: {
          "circle-opacity": 0.75,
          "circle-stroke-width": 1,
          "circle-radius": 4,
          "circle-color": "#000",
        },
      })
    })
    map.on("click", "circles", (e) => {
      console.log(`hi`)
    })
    map.on("mouseenter", "circles", () => {
      map.getCanvas().style.cursor = "pointer"
    })
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    })
  }, [data])

  return (
    <div className="App">
      <div className={classes.mapContainer}>
        <div className={classes.mapBox} ref={mapboxElRef} />
      </div>
    </div>
  )
}

export default Map
