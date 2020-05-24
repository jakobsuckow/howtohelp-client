import React from "react"
import TextField from "@material-ui/core/TextField"

export default function TextInput({ label }) {
  return <TextField id="outlined-basic" label={label} variant="outlined" />
}
