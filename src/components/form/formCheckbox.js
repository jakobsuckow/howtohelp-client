import { FormControlLabel, Checkbox, makeStyles } from "@material-ui/core"
import { useFormContext } from "react-hook-form"

import React from "react"

const useStyles = makeStyles((theme) => ({
  iconButton: {
    height: "50px",
  },
}))

const FormCheckbox = (props) => {
  const { icon, checkedIcon, name, label } = props
  const { register } = useFormContext()

  const classes = useStyles()
  return (
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
      label={label}
    />
  )
}

export default FormCheckbox
