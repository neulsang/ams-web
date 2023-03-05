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
  size = 'medium',
}: TextFieldHookFormProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          size={size}
          type={type}
          {...field}
          error={!!error}
          helperText={error?.message}
          fullWidth
          placeholder={placeholder}
          variant='outlined'
        />
      )}
    />
  )
}

export default TextFieldHookForm
