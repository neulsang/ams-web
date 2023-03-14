import React, { useEffect, useState } from 'react'
import { useUserServiceApi } from '@libs/api/userService'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useTheme } from '@mui/material'
import { ActionMeta, MultiValue } from 'react-select/dist/declarations/src'
export type AccountListFilter = {
  sorts: {
    no: number
    columnName: string
    condition: string // TODO: 협의필요
    data: any
  }[]
}

export interface ColourOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'all', label: '전체', color: '#5243AA' },
  { value: '안동_풍산읍', label: '안동_풍산읍', color: '#5243AA' },
  { value: '안동_와룡면', label: '안동_와룡면', color: '#FF8B00' },
  { value: '안동_예안면', label: '안동_예안면', color: '#FFC400' },
  { value: '구미_A동', label: '구미_A동', color: '#36B37E' },
  { value: '구미_동', label: '구미_동', color: '#00875A' },
  { value: '예천', label: '예천', color: '#253858' },
  { value: '서산', label: '서산', color: '#666666' },
]
const animatedComponents = makeAnimated()

const AccountListFilter = () => {
  const { getMyInfo } = useUserServiceApi()
  const theme = useTheme()
  const [value, setValue] = useState<MultiValue<ColourOption>>()

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div>
      <button
        onClick={() => {
          const userInfo = getMyInfo()
        }}
      >
        11111
      </button>

      <Select
        blurInputOnSelect={false}
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(newValue: MultiValue<ColourOption>, actionMeta: ActionMeta<ColourOption>) => {
          newValue.find((option) => option.value === 'all')
            ? setValue(colourOptions.slice(1))
            : setValue(newValue)
        }}
        /*  onChange={(newValue: MultiValue<ColourOption>, actionMeta: ActionMeta<unknown>) =>
          setValue(newValue)
        } */
        value={value}
        isMulti
        options={colourOptions}
        theme={(selectTheme) => ({
          ...selectTheme,
          borderRadius: 0,
          colors: {
            ...selectTheme.colors,
            primary: theme.palette.primary.main,
          },
        })}
        styles={{
          multiValue: (base, props) => ({
            ...base,
            background: theme.palette.primary.light,
          }),
        }}
      />
    </div>
  )
}

export default AccountListFilter
