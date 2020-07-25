import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  patternContainer: {
    zIndex: 10000,
    height: "100%",
    width: "auto",
    backgroundColor: "#ccc",
  },
})

const Pattern = () => {
  const classes = useStyles()
  return <div className={classes.patternContainer}></div>
}

export default Pattern
