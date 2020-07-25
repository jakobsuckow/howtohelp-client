import React, { useContext } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useForm } from "react-hook-form"
import { AlertContext } from "../../components/alert/alertProvider"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Registration = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const classes = useStyles()
  const { showAlert } = useContext(AlertContext)

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) =>
            showAlert({
              message: `Success`,
            })
          )}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              {errors.firstName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
                id="telephone"
                label="Telephone Number"
                name="telephone"
                autoComplete="telephone"
              />
              {errors.telephone && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                autoComplete="fname"
                name="streetName"
                variant="outlined"
                required
                fullWidth
                id="streetName"
                label="Street Name"
                autoFocus
              />
              {errors.streetName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                variant="outlined"
                required
                fullWidth
                id="streetNumber"
                label="Number"
                name="streetNumber"
                autoComplete="number"
              />
              {errors.streetNumber && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                autoComplete="fname"
                name="postal"
                variant="outlined"
                required
                fullWidth
                id="postalCode"
                label="Postal Code"
                autoFocus
              />
              {errors.postalCode && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="lname"
              />
              {errors.city && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
              />
              {errors.country && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the term's and services"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Registration
