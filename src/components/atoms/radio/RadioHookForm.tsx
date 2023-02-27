import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioHookFormProps } from './data'

const RadioHookForm = ({ control, name, radioDatas }: RadioHookFormProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup {...field} row onChange={field.onChange} defaultValue={field.value}>
          {radioDatas?.map((radioData) => (
            <FormControlLabel
              key={radioData.id}
              value={radioData.value}
              control={<Radio />}
              label={radioData.label}
            />
          ))}
        </RadioGroup>
      )}
    />
  )
}

export default RadioHookForm
