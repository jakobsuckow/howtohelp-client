import React from "react"
import BigMap from "../shared/bigmap/bigmap"
import FloatingButton from "../shared/floatingbutton/floatingbutton"
import TopBar from "../shared/topbar/topbar"

const Home = () => {
  return (
    <div>
      <TopBar />
      <FloatingButton />
      <BigMap />
    </div>
  )
}

export default Home
