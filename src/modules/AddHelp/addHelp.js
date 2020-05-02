import React from "react"
import Form from "../shared/form/form"
import Container from "@material-ui/core/Container"
import { Input, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
  root: {},
})

const AddHelp = () => {
  const classes = useStyles()
  return (
    <div>
      <Container maxWidth="md">
        <Form>
          <Input label="name" />
          <Input label="name" />
          <Input label="name" />
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddHelp
