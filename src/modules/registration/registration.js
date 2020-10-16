import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { useForm, FormContext } from "react-hook-form"
import { AlertContext } from "../../components/alert/alertProvider"
import Layout from "../../components/layout/layout"
import { Box, Button } from "@material-ui/core"
import FormInput from "../../form/formInput"
import FormCheckbox from "../../form/formCheckbox"

const Registration = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
    defaultValues: {
      firstName: "asdasd",
    },
  })

  const { handleSubmit } = methods

  const { showAlert } = useContext(AlertContext)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <FormContext {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormCheckbox />
              <FormInput
                id="registration-firstname"
                name="firstName"
                label="Firstname"
                placeholder="Enter your firstname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </FormContext>
    </Layout>
  )
}

export default Registration
