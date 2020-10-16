import { FormControlLabel, Checkbox } from "@material-ui/core"
import Favorite from "@material-ui/icons/Favorite"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"
import React from "react"

const FormCheckbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
        />
      }
      label="Custom icon"
    />
  )
}

export default FormCheckbox
