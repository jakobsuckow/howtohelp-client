import React from "react"
import Grid from "@material-ui/core/Grid"
import { useForm, FormProvider } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box, Button, Typography } from "@material-ui/core"
import FormCheckbox from "../../components/form/formCheckbox"
import DogWalkingIcon from "../../components/form/assets/dogWalkingIcon"
import DeliveryIcon from "../../components/form/assets/deliveryIcon"
import FormInput from "../../components/form/formInput"
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
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit((d) => console.log(d))}>
          <Grid container spacing={2}>
            <Typography variant="h2">What can you help with ?</Typography>
            <Grid item xs={12}>
              <FormCheckbox
                icon={<DogWalkingIcon />}
                label="Dogwalking"
                name="dogwalking"
                checkedIcon={<DogWalkingIcon checked />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheckbox
                icon={<DeliveryIcon />}
                label="Delivery"
                name="delivery"
                checkedIcon={<DeliveryIcon checked />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput name="fistName" label="First Name" />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </Layout>
  )
}

export default Registration
