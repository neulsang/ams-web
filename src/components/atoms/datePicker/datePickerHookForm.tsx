import { TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { Controller } from 'react-hook-form'
import { DatePickerHookFormProps } from './data'

const DatePickerHookForm = ({ control, name, error }: DatePickerHookFormProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('ko')}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={field.value}
            onChange={(date) => field.onChange(date.format('YYYY-MM-DD'))}
            renderInput={(params) => (
              <TextField
                {...params}
                {...field}
                error={!!error}
                helperText={error?.message}
                fullWidth
                inputProps={{
                  className: 'text-lg',
                }}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DatePickerHookForm
