import React from "react"
import Form from "../shared/form/form"
import Container from "@material-ui/core/Container"
import { Input, Button } from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// import { makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles({
//   root: {},
// })

const AddHelp = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Form>
          <List>
            <ListItem>
              <Input label="name" />
            </ListItem>
            <ListItem>
              <Input label={`name`} />
            </ListItem>
            <ListItem>
              <Input label="name" />
            </ListItem>
            <ListItem>
              <Button>Submit</Button>
            </ListItem>
          </List>
        </Form>
      </Container>
    </div>
  )
}

export default AddHelp
