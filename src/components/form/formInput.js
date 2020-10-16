import { makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { useFormContext } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
  root: {},
  input: ({ disabled }) => ({
    flex: 1,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
    },
    border: `1px solid ${theme.palette.common.black}`,
    outline: "none",
    backgroundColor: "transparent",
    color: theme.palette.common.black,
    "&::placeholder": {
      color: theme.palette.common.black,
    },
    ...(disabled && {
      pointerEvents: "none",
      color: theme.palette.common.black,
    }),
  }),
  label: ({ disabled }) => ({
    textTransform: "uppercase",
    ...(disabled && {
      color: theme.palette.common.black,
    }),
  }),
  optionalLabel: ({ disabled }) => ({
    textTransform: "none",
    ...(disabled && {
      color: theme.palette.common.black,
    }),
  }),
  error: {
    marginTop: theme.spacing(0.5),
  },
}))

const FormInput = (props) => {
  const { name, required, label } = props
  const classes = useStyles()
  const { register, errors } = useFormContext()

  return (
    <div className={classes.root}>
      {label && (
        <Typography component="label" htmlFor={name}>
          {label}
          {!required && <Typography>Optional</Typography>}
        </Typography>
      )}
      <Typography
        component="input"
        variant="body1"
        ref={register}
        name={name}
        className={classes.input}
      />
    </div>
  )
}

export default FormInput
