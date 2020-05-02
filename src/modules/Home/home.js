import React from "react"
import BigMap from "../shared/bigmap/bigmap"
import FloatingButton from "../shared/floatingbutton/floatingbutton"
import TopBar from "../shared/topbar/topbar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
  },
})

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopBar />
      <FloatingButton />
      <BigMap />
    </div>
  )
}

export default Home
