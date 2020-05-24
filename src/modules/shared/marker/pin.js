import React, { useState, useEffect } from "react"
import { Marker, Popup } from "react-map-gl"
import { Avatar, Typography } from "@material-ui/core"
import Circle from "../icons/pulseCircle/pulseCircle"
import { Link } from "react-router-dom"

export const Pin = (props) => {
  const { id, fields } = props

  const [selectedItem, setSelectedItem] = useState(null)
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <>
      <Marker
        key={id}
        latitude={fields.lat}
        longitude={fields.long}
        closeOnClick={true}
        anchor="top"
        dynamicPosition={false}
      >
        <button
          className="marker-btn"
          onClick={(e) => {
            e.preventDefault()
            setSelectedItem(id)
          }}
        >
          <Circle />
        </button>
      </Marker>
      {selectedItem ? (
        <Popup
          latitude={fields.lat}
          longitude={fields.long}
          onClose={() => {
            setSelectedItem(null)
          }}
        >
          <div>
            <Avatar>
              {fields.firstName.charAt(0)}
              {fields.lastName.charAt(0)}
            </Avatar>
            <p>
              {fields.firstName} {fields.lastName}
            </p>
            <div>
              <Typography variant="body1">
                Description:
                {fields.description}
              </Typography>
            </div>
          </div>
          <Link to={`/stories/${id}`}>Read more about this...</Link>
        </Popup>
      ) : null}
    </>
  )
}
