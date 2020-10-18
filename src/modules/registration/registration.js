import React from "react"
import Grid from "@material-ui/core/Grid"
import { useForm, FormProvider } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box, Button, Typography } from "@material-ui/core"
import FormCheckbox from "../../components/form/formCheckbox"
import { ReactComponent as DeliveryIcon } from "../../components/form/assets/delivery.svg"
import { ReactComponent as Maintenance } from "../../components/form/assets/maintenance.svg"
import { ReactComponent as Food } from "../../components/form/assets/food.svg"
import { ReactComponent as FoodChecked } from "../../components/form/assets/food-checked.svg"
import { ReactComponent as Shopping } from "../../components/form/assets/shopping.svg"
import { ReactComponent as ShoppingChecked } from "../../components/form/assets/shopping-checked.svg"
import { ReactComponent as DogWalking } from "../../components/form/assets/dogwalking.svg"
import { ReactComponent as DogWalkingChecked } from "../../components/form/assets/dogwalking-checked.svg"
import { ReactComponent as Cleaning } from "../../components/form/assets/cleaning.svg"
import { ReactComponent as CleaningChecked } from "../../components/form/assets/cleaning-checked.svg"
import { ReactComponent as Covid } from "../../components/form/assets/covid.svg"
import { ReactComponent as CovidChecked } from "../../components/form/assets/covid-checked.svg"
import { AlertContext } from "../../components/alert/alertProvider"
import { GlobalDataContext } from "../shared/app/globalDataProvider"
import FormInput from "../../components/form/formInput"

const Registration = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
  })

  const { showAlert } = React.useContext(AlertContext)
  const { setModal } = React.useContext(GlobalDataContext)

  const { handleSubmit } = methods

  const onSubmit = (data) => {
    console.log(data)
    const hasChecked = !Object.keys(data).every((k) => !data[k])

    if (!hasChecked || data.other === "") {
      showAlert({
        message: "Please select at least one value",
        severity: "info",
      })
    } else {
      showAlert({
        message: "Thanks",
      })
      setTimeout(() => {
        setModal({
          open: false,
        })
      }, [200])
    }
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
                  label="I can help delivery packages"
                  name="delivery"
                  checkedIcon={<DeliveryIcon checked />}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormCheckbox
                  icon={<Food />}
                  checkedIcon={<FoodChecked />}
                  label="I can provide food"
                  name="food1"
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
                  icon={<Covid />}
                  label="I can answer questions about covid"
                  name="covid"
                  checkedIcon={<CovidChecked checked />}
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
                  icon={<Maintenance />}
                  checkedIcon={<Maintenance />}
                  label="I can help with maintenance"
                  name="maintenance"
                />
              </Grid>
            </Grid>
          </Box>
          <Box mb={4} mt={4} pl={5} pr={5}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormInput
                  name="other"
                  placeholder="I can help with..."
                  label="other"
                />
              </Grid>
              <Grid item xs={6}>
                <Box style={{ textAlign: "right" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </FormProvider>
    </Layout>
  )
}

export default Registration
