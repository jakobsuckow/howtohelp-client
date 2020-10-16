import { FormControlLabel, Checkbox } from "@material-ui/core"
import React from "react"

const FormCheckbox = (props) => {
  const { icon, checkedIcon, name, label } = props
  return (
    <FormControlLabel
      control={<Checkbox icon={icon} checkedIcon={checkedIcon} name={name} />}
      label={label}
    />
  )
}

export default FormCheckbox
