import React from "react"
import Grid from "@material-ui/core/Grid"
import { useForm, Controller } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box, Button } from "@material-ui/core"
import FormInput from "../../components/form/formInput"
import FormCheckbox from "../../components/form/formCheckbox"
import DogWalkingIcon from "../../components/form/assets/dogWalkingIcon"
import DeliveryIcon from "../../components/form/assets/deliveryIcon"
import { CheckBox } from "@material-ui/icons"

const Registration = () => {
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
    defaultValues: {
      firstName: "asdasd",
    },
  })

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit((d) => console.log(d))}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              render={(props) => (
                <FormCheckbox
                  icon={<DogWalkingIcon />}
                  label="Dogwalking"
                  checkedIcon={<DogWalkingIcon checked />}
                  checked={props.value}
                  onChange={(e) => console.log(e.target.checked)}
                />
              )}
              name="dogwalking"
              control={control}
              defaultValue={false}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller as={<CheckBox />} />
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
    </Layout>
  )
}

// https://react-hook-form.com/api#useFormContext

export default Registration
