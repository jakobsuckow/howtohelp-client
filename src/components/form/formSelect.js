import React from 'react';
import { Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import theme, { colors } from '../../theme';
import { ReactComponent as IconArrow } from './assets/arrowDown.svg';
import { ReactComponent as IconClose } from './assets/close.svg';

const useStyles = makeStyles(() => ({
  wrapper: {}
}));

const customSelectStyles = ({ controlBackgroundColor, isExtraSmall }) => ({
  container: (provided, state) => {
    return {
      ...provided,
      pointerEvents: state.isDisabled ? 'auto' : null
    };
  },
  placeholder: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0
  }),
  control: (provided, state) => {
    return {
      ...provided,
      background: 'none',
      padding: '4px 0px 0px 16px',
      minHeight: 42,
      [theme.breakpoints.up('sm')]: {
        minHeight: 52
      },
      borderRadius: 6,
      borderWidth: 2,
      borderColor: state.isFocused ? colors.primaryDarkBlue : colors.primaryGrey,
      boxShadow: 'none',
      '&:hover': {}
    };
  },
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0
  }),
  multiValue: (provided) => {
    return {
      ...provided,
      borderRadius: 8,
      padding: '2px 2px 2px 4px',
      margin: '4px 8px 6px 0px'
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: colors.naturalsDarkest,
    padding: 0,
    margin: 0
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    margin: 0,
    color: colors.secondaryBright,
    ':hover': {
      backgroundColor: 'none'
    },
    ':hover path': {
      fill: colors.neutralsDark
    }
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    padding: '8px 16px 8px 16px',
    boxShadow: '0px 8px 32px rgba(205, 205, 205, 0.24)',
    borderRadius: '0px 0px 16px 16px'
  }),
  option: (provided, state) => ({
    ...provided,
    background: 'none',
    paddingLeft: 0,
    paddingTop: 6,
    paddingBottom: 6,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 8,
      paddingBottom: 8
    },

    '&:hover': {},
    ':active': {
      background: 'none'
    }
  })
});

function cpl(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FormSelect = (props) => {
  const { options, name, required, placeholder, isMulti, disabled, isCreateable } = props;

  const IndicatorSeparator = () => null;
  const ClearIndicator = () => null;

  const classes = useStyles();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = customSelectStyles({ isExtraSmall });

  const { errors, control } = useFormContext();

  const ReactSelectWrapper = React.useCallback(
    ({ value, onChange, onBlur }) => {
      const DropdownIndicator = ({ selectProps }) => {
        const isValueEmpty = !selectProps.value || selectProps.value.length === 0;
        return (
          <IconArrow
            className={
              selectProps.menuIsOpen
                ? classes.dropdownIconActive
                : !isValueEmpty
                ? classes.dropdownIconWithValue
                : undefined
            }
          />
        );
      };

      const MultiValueRemove = (props) => (
        <components.MultiValueRemove {...props}>
          <IconClose className={classes.multiValue} />
        </components.MultiValueRemove>
      );

      return (
        <>
          <Select
            className={classes.wrapper}
            isMulti={isMulti}
            tabSelectsValue={false}
            isClearable={true}
            options={options}
            isSearchable={false}
            defaultValue={null}
            isDisabled={disabled}
            error={!!errors[name]}
            styles={styles}
            value={
              isMulti
                ? value &&
                  value
                    .map((value) => ({
                      label: options.find((option) => option.value === value).label,
                      value
                    }))
                    .sort()
                : options.find((option) => option.name === value)
            }
            placeholder={placeholder}
            noOptionsMessage={() => `No options`}
            onChange={(option) =>
              onChange(isMulti ? option && option.map(({ value }) => value) : option.value)
            }
            onMenuClose={() => {
              setTimeout(() => onBlur());
            }}
            components={{
              IndicatorSeparator,
              DropdownIndicator,
              ClearIndicator,
              MultiValueRemove
            }}
          />
          {errors[name] && (
            <Typography className={classes.errorLabel} component="p" variant="body2">
              {errors[name].message}
            </Typography>
          )}
        </>
      );
    },
    [classes, name, options, styles, placeholder, disabled, errors, isMulti]
  );

  const CreateableSelectWrapper = React.useCallback(
    ({ value, onChange, onBlur }) => {
      return (
        <CreatableSelect
          tabSelectsValue={false}
          onChange={(option) => {
            console.log(option);
            onChange(isMulti ? option && option.map(({ value }) => value) : option.value);
          }}
          value={
            isMulti
              ? value &&
                value.map((value) => ({
                  label: cpl(value),
                  value
                }))
              : options.find((option) => option.value === value)
          }
          options={options}
          isDisabled={disabled}
          isClearable={true}
          onMenuClose={() => {
            setTimeout(() => onBlur());
          }}
          styles={styles}
          backspaceRemovesValue={true}
        />
      );
    },
    [isMulti, disabled, styles, options]
  );

  return (
    <Controller
      as={isCreateable ? CreateableSelectWrapper : ReactSelectWrapper}
      name={name}
      control={control}
      rules={{ required: required }}
      defaultValue={{ value: null, label: '' }}
    />
  );
};

export default FormSelect;
