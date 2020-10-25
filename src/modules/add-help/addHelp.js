import React from "react"
import { useForm, FormProvider } from "react-hook-form"
import Layout from "../../components/layout/layout"
import { Box } from "@material-ui/core"

import { AlertContext } from "../../components/alert/alertProvider"
import { GlobalDataContext } from "../shared/app/globalDataProvider"
import Features from "./steps/features"
import PersonalInfo from "./steps/personalInfo"

const AddHelp = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    submitFocusError: false,
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const [activeStep, setActiveStep] = React.useState("features")

  const { showAlert } = React.useContext(AlertContext)
  const { setModal } = React.useContext(GlobalDataContext)

  const { handleSubmit } = methods

  return (
    <Layout>
      <FormProvider {...methods}>
        {activeStep === "features" && (
          <Features onNextClick={() => setActiveStep("personal-info")} />
        )}
        {activeStep === "personal-info" && <PersonalInfo />}
        <Box component="form" onSubmit={handleSubmit(onSubmit)}></Box>
      </FormProvider>
    </Layout>
  )
}

export default AddHelp
