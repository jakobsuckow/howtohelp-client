import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import { makeStyles } from "@material-ui/core/styles"
import "mapbox-gl/dist/mapbox-gl.css"
import { LinearProgress, Typography } from "@material-ui/core"

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFrb2JzdWNrb3ciLCJhIjoiY2s4M2pmeHo3MGI5bzNtbzVma2w3YTdkOCJ9.SoffMUvqxv6PTh5TYq20kA"

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

const Map = (props) => {
  const { data } = props
  const classes = useStyles()
  const mapboxElRef = useRef(null)
  const [loading, setLoading] = React.useState(false)
  useEffect(() => {
    setLoading(true)
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/sueck94/ckgc1uk8d0cb31ap3fkfw1zzm?optimize=true",
      center: [13.404954, 52.520008],
      zoom: 12,
    })
    setLoading(map.loaded())
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
      console.log(e)
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
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <div className="App">
          <div className={classes.mapContainer}>
            <div className={classes.mapBox} ref={mapboxElRef} />
          </div>
        </div>
      )}
    </>
  )
}

export default Map
