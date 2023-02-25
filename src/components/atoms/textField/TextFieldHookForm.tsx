import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { TextFieldHookFormProps } from './data'

const TextFieldHookForm = ({ control, error, placeholder }: TextFieldHookFormProps) => {
  return (
    <Controller
      name='id'
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!error}
          helperText={error?.message}
          autoFocus
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
