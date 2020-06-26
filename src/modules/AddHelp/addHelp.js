import React, { useState } from "react"
import { useForm, FormContext } from "react-hook-form"
import {
  Button,
  Grid,
  TextField,
  Box,
  TextareaAutosize,
  MenuItem,
  Select,
} from "@material-ui/core"
import { Redirect } from "react-router-dom"

// import { makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles({
//   root: {},
// })

const AddHelp = () => {
  const [redirect, setRedirect] = useState(false)

  const { methods, register, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
  })

  if (redirect) {
    return <Redirect to={`/home`} />
  }

  return (
    <Box display="flex" maxWidth={{ md: 500, xs: `100vw` }} m="auto" pt={10}>
      <FormContext {...methods}>
        <Box component="form" p={3}>
          <h1>Add Help</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="phoneNumber"
                inputRef={register}
                maxWidth="100%"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box pt={2}>
                <TextField
                  variant="outlined"
                  maxWidth="100%"
                  name="password"
                  type="password"
                  inputRef={register}
                  fullWidth
                />
              </Box>
            </Grid>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <Grid item xs={12}>
              <Box pt={2}>
                <TextareaAutosize
                  variant="outlined"
                  aria-label="minimum height"
                  name="description"
                  rowsMin={3}
                  placeholder="Minimum 3 rows"
                  inputRef={register}
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box pt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FormContext>
    </Box>
  )
}

export default AddHelp
