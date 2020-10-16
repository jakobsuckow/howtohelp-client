import React from "react"
import Grid from "@material-ui/core/Grid"
import { useForm, FormContext } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box, Button } from "@material-ui/core"
import FormInput from "../../components/form/formInput"
import FormCheckbox from "../../components/form/formCheckbox"
import DogWalkingIcon from "../../components/form/assets/dogWalkingIcon"
import DeliveryIcon from "../../components/form/assets/deliveryIcon"

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



  return (
    <Layout>
      <FormContext {...methods}>
        <Box component="form" onSubmit={handleSubmit((d) => console.log(d))}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInput
                id="registration-firstname"
                name="firstName"
                label="Firstname"
                placeholder="Enter your firstname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                icon={<DogWalkingIcon />}
                label="Dogwalking"
                checkedIcon={<DogWalkingIcon checked />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                icon={<DeliveryIcon />}
                label="Delivery"
                checkedIcon={<DeliveryIcon checked />}
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
