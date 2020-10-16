import React from "react"
import { useFormContext } from "react-hook-form"
import Input from "../components/input/input"

const FormInput = (props) => {
  const { id, type, name, required, minLength, validate, ...rest } = props
  const { errors, register } = useFormContext()

  const generateValidators = React.useCallback(() => {
    const validators = {}
    if (required) {
      validators.required = "This field is mandatory"
    }
    if (type === "email") {
      validators.pattern = {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: "Please enter valid email",
      }
    }
    if (minLength) {
      validators.minLength = minLength
    }
    if (validate) {
      validators.validate = validate
    }
    return validators
  }, [required, type, minLength, validate])

  return (
    <Input
      id={id}
      type={type}
      name={name}
      error={errors[name]}
      ref={register(generateValidators())}
      required={required}
      {...rest}
    />
  )
}

export default FormInput
