import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { colors } from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {},
  input: ({ disabled, lg }) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    },
    flex: 1,
    minWidth: '320px',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      ...(lg && {
        minWidth: '710px',
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(4)
      })
    },
    '&:focus': {
      borderColor: theme.palette.primary.main
    },
    borderRadius: 0,
    border: 'none',
    borderBottom: `1px solid ${colors.neutralsDarkGrey}`,
    ...(lg && {
      borderBottom: `2px solid ${colors.neutralsDarkGrey}`
    }),
    outline: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.common.black,
    '&::placeholder': {
      color: theme.palette.common.secondaryGrey
    },
    ...(disabled && {
      pointerEvents: 'none',
      color: theme.palette.common.black
    })
  }),
  label: ({ disabled }) => ({
    textTransform: 'uppercase',
    ...(disabled && {
      color: theme.palette.common.black
    })
  }),
  optionalLabel: ({ disabled }) => ({
    textTransform: 'none',
    ...(disabled && {
      color: theme.palette.common.black
    })
  }),
  error: {
    marginTop: theme.spacing(0.5)
  }
}));

const FormInput = (props) => {
  const { name, label, id, placeholder, lg } = props;
  const classes = useStyles({ lg });
  const { register, errors } = useFormContext();

  return (
    <div className={classes.root}>
      {label && (
        <Typography component="label" htmlFor={name} className={classes.label}>
          {label}
        </Typography>
      )}
      <div className={classes.inputContainer}>
        <Typography
          component="input"
          variant="body1"
          name={name}
          ref={register}
          id={id}
          className={classes.input}
          placeholder={placeholder}
        />
      </div>
      {errors && (
        <Typography component="p" variant="body2" color="error" className={classes.error}>
          {errors.message}
        </Typography>
      )}
    </div>
  );
};

export default FormInput;
