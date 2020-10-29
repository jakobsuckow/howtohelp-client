import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const useStyles = makeStyles(() => ({
  wrapper: {}
}));

const FormSelect = (props) => {
  const { options, name, required, placeholder } = props;

  const classes = useStyles();

  const { register, errors, control } = useFormContext();

  return (
    <div className={classes.wrapper}>
      <Controller
        as={<Select options={options} placeholder="Please Select" />}
        name={name}
        control={control}
        rules={{ required: required }}
        onChange={([selected]) => {
          return { selected };
        }}
        defaultValue={{}}
      />
    </div>
  );
};

export default FormSelect;
