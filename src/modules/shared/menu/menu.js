import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles({
  menuItem: {
    width: `100%`,
    textAlign: `center`,
    position: "relative",
  },
})

const Menu = () => {
  const classes = useStyles()

  return (
    <Box width="100%" height="100%">
      <Box className={classes.menuList}>
        <Box className={classes.menuItem}>
          <NavLink to="/">FAQ</NavLink>
        </Box>
      </Box>
    </Box>
  )
}

export default Menu
