import React, { useState } from "react"

export const Marker = () => {
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
    <div>
      <Marker
        key={seeker.seekerId}
        latitude={seeker.location.coordinates[1]}
        longitude={seeker.location.coordinates[0]}
      >
        <button
          className="marker-btn"
          onClick={(e) => {
            e.preventDefault()
            setSelectedItem(seeker)
          }}
        >
          <div class="heart">
            <img
              className="heart"
              src="https://upload.wikimedia.org/wikipedia/commons/8/86/A_perfect_SVG_heart.svg"
              alt="heart"
            />
          </div>
        </button>
      </Marker>
      ))}
      {selectedItem ? (
        <Popup
          latitude={selectedItem.location.coordinates[1]}
          longitude={selectedItem.location.coordinates[0]}
          onClose={() => {
            setSelectedItem(null)
          }}
        >
          <div>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.message}</p>
            <b>Address:</b>
            <p>{selectedItem.location.formattedAddress}</p>
          </div>
        </Popup>
      ) : null}
    </div>
  )
}
