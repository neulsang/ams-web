import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { TextFieldHookFormProps } from './data'

const TextFieldHookForm = ({
  control,
  name,
  error,
  placeholder,
  type = 'text',
}: TextFieldHookFormProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          type={type}
          {...field}
          error={!!error}
          helperText={error?.message}
          fullWidth
          placeholder={placeholder}
          inputProps={{
            className: 'text-lg',
          }}
          variant='outlined'
        />
      )}
    />
  )
}

export default TextFieldHookForm
