import React from "react"
import TextField from "@material-ui/core/TextField"

export default function TextInput({ label }) {
  return (
    <form className="" noValidate autoComplete="off">
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </form>
  )
}
