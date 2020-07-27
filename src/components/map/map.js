import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import clsx from "clsx"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}))

function Map() {
  const matches = useMediaQuery("(min-width:600px)")
  const isMobile = () => {
    if (matches) {
      return `left`
    } else {
      return `bottom`
    }
  }
  const classes = useStyles()
  const mapboxElRef = useRef(null)
  const [state, setState] = useState({
    left: true,
    bottom: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      hi
    </div>
  )

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
          "circle-color": "#FFEB3B",
        },
      })
    })
    map.on("click", "circles", (e) => {
      toggleDrawer(isMobile(), true)
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
      <SwipeableDrawer
        anchor={isMobile()}
        open={state[isMobile()]}
        onClose={toggleDrawer(isMobile(), false)}
        onOpen={toggleDrawer(isMobile(), true)}
      >
        {list(isMobile())}
      </SwipeableDrawer>
      <div className={classes.mapContainer}>
        <div className={classes.mapBox} ref={mapboxElRef} />
      </div>
    </div>
  )
}

export default Map
