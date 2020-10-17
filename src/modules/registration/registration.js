import React from "react"
import Grid from "@material-ui/core/Grid"
import { useForm, FormProvider } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box, Button, Typography } from "@material-ui/core"
import FormCheckbox from "../../components/form/formCheckbox"
import DeliveryIcon from "../../components/form/assets/deliveryIcon"
import { ReactComponent as Food } from "../../components/form/assets/food.svg"
import { ReactComponent as FoodChecked } from "../../components/form/assets/food-checked.svg"
import { ReactComponent as Shopping } from "../../components/form/assets/shopping.svg"
import { ReactComponent as ShoppingChecked } from "../../components/form/assets/shopping-checked.svg"
import { ReactComponent as DogWalking } from "../../components/form/assets/dogwalking.svg"
import { ReactComponent as DogWalkingChecked } from "../../components/form/assets/dogwalking-checked.svg"
import { ReactComponent as Cleaning } from "../../components/form/assets/cleaning.svg"
import { ReactComponent as CleaningChecked } from "../../components/form/assets/cleaning-checked.svg"
import { AlertContext } from "../../components/alert/alertProvider"

const Registration = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
    defaultValues: {
      firstName: "asdasd",
    },
  })

  const { showAlert } = React.useContext(AlertContext)

  const { handleSubmit } = methods

  const onSubmit = (data) => {
    showAlert({
      message: "Hi",
    })
    console.log(data)
  }

  return (
    <Layout>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2} mt={2}>
            <Typography variant="h2">What can you help with ?</Typography>
          </Box>
          <Box mb={4} mt={4}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<DogWalking />}
                  label="I can walk a dog"
                  name="dogwalking"
                  checkedIcon={<DogWalkingChecked checked />}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<DeliveryIcon />}
                  label="Delivery"
                  name="delivery"
                  checkedIcon={<DeliveryIcon checked />}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Food />}
                  checkedIcon={<FoodChecked />}
                  label="I can provide food"
                  name="food"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Shopping />}
                  checkedIcon={<ShoppingChecked />}
                  label="I can help with shopping"
                  name="shopping"
                />
              </Grid>
            </Grid>
          </Box>
          <Box mb={4} mt={4}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Cleaning />}
                  label="I can help with cleaning"
                  name="cleaning"
                  checkedIcon={<CleaningChecked checked />}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<DeliveryIcon />}
                  label="Delivery"
                  name="delivery"
                  checkedIcon={<DeliveryIcon checked />}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Food />}
                  checkedIcon={<FoodChecked />}
                  label="I can provide food"
                  name="food"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Shopping />}
                  checkedIcon={<ShoppingChecked />}
                  label="I can help with shopping"
                  name="shopping"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </FormProvider>
    </Layout>
  )
}

export default Registration
