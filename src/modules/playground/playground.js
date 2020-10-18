import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
import Button from "@material-ui/core/Button"
import purple from "@material-ui/core/colors/purple"

const useStyles = makeStyles((theme) => ({
  textPurple: {
    color: purple[500],
    "&:hover": {
      backgroundColor: fade(purple[500], theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },

  outlinedPurple: {
    border: `1px solid ${fade(purple[500], 0.5)}`,
    "&:hover": {
      border: `1px solid ${purple[500]}`,
    },
    "&$disabled": {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  containedPurple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
      "@media (hover: none)": {
        backgroundColor: purple[500],
      },
    },
  },
  disabled: {},
}))

const Playground = () => {
  const classes = useStyles()
  return (
    <>
      <Button className={classes.textPurple}>Purple Text</Button>
      <Button
        variant="outlined"
        className={(classes.textPurple, classes.outlinedPurple)}
        classes={{ disabled: classes.disabled }}
      >
        Purple Outlined
      </Button>
      <Button variant="contained" className={classes.containedPurple}>
        Purple Contained
      </Button>

      <>
        {["text", "outlined", "contained"].map((variant) => (
          <Button color="primary" variant={variant}>
            Primary {variant}
          </Button>
        ))}
      </>
    </>
  )
}

export default Playground
