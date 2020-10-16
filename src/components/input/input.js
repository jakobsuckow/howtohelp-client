import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  input: ({ disabled }) => ({
    flex: 1,
    padding: theme.spacing(2),
    outline: "none",
    ...(disabled && {
      pointerEvents: "none",
    }),
  }),
}))
const Input = React.forwardRef((props, ref) => {
  const { required, error, disabled, label, id } = props
  const classes = useStyles({
    error,
  })
  return (
    <div className={classes.root}>
      {label && (
        <Typography
          component="label"
          color={error ? "error" : "initial"}
          htmlFor={id}
        >
          {label}
          {!required && <Typography>Optional</Typography>}
        </Typography>
      )}
      <Typography component="input" id={id} className={classes.input} />
    </div>
  )
})

export default Input
