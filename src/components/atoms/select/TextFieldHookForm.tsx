import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { SelectHookFormProps } from './data'

const SelectHookForm = ({
  control,
  name,
  error,
  selectDatas,
  size = 'medium',
}: SelectHookFormProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <Select value={field.value} displayEmpty onChange={field.onChange} size={size}>
            {selectDatas?.map((selectData) => (
              <MenuItem key={selectData.id} value={selectData.value}>
                {selectData.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export default SelectHookForm
