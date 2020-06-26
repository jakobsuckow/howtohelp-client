import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import getScrollbarSize from "@material-ui/core/utils/getScrollbarSize"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Menu from "../menu/menu"

const useStyles = makeStyles((theme) => ({
  line: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    width: "100%",
    height: 12,
    padding: theme.spacing(2.5, 3),
    boxShadow: "0px 8px 24px rgba(205, 205, 205, 0.16)",
  },
  menu: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    zIndex: 1000,
  },
  logo: {
    float: "left",
  },
  action: {
    float: "right",
  },
  actionButton: {
    padding: 0,
    backgroundColor: "transparent",
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "none",
    color: theme.palette.common.neutralsDarkest,
    "&:hover": {
      color: theme.palette.common.neutralsDarkest,
      "& svg": {
        "& path": {
          fill: theme.palette.common.neutralsDarkest,
        },
      },
    },
  },
}))

const scrollbarSize = getScrollbarSize()

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarSize}px`
    } else {
      document.body.style.overflow = "auto"
      document.body.style.paddingRight = 0
    }
  }, [isMenuOpen])

  return (
    <>
      <div className={classes.line}>
        <div className={classes.logo}>
          <Box component={Link} to="/" display="inline-block">
            Logo
          </Box>
        </div>
        <div className={classes.action}>
          {!isMenuOpen && (
            <>
              <Button
                className={classes.actionButton}
                size="small"
                //   endIcon={<MenuSVG />}
                disableRipple
                onClick={() => setIsMenuOpen(true)}
              >
                menu
              </Button>{" "}
            </>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className={classes.menu}>
          <Button
            className={classes.actionButton}
            size="small"
            //   endIcon={<CloseSVG />}
            disableRipple
            onClick={() => setIsMenuOpen(false)}
          >
            close
          </Button>
          <Menu />
        </div>
      )}
    </>
  )
}

export default Navbar
