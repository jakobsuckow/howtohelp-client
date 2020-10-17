import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { useFormContext } from "react-hook-form"

import React from "react"

const useStyles = makeStyles((theme) => ({
  iconButton: {
    height: "50px",
    marginBottom: theme.spacing(2),
  },
  label: {
    color: theme.palette.primary,
  },
  root: {
    textAlign: "center",
  },
}))

const FormCheckbox = (props) => {
  const { icon, checkedIcon, name, label } = props
  const { register } = useFormContext()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FormControlLabel
        inputRef={register}
        name={name}
        control={
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            className={classes.iconButton}
          />
        }
        labelPlacement="bottom"
        label={
          <Typography variant="body1" style={{}}>
            {label}
          </Typography>
        }
      />
    </div>
  )
}

export default FormCheckbox
