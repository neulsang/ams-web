import SelectHookForm from '@components/atoms/select/TextFieldHookForm'
import TextFieldHookForm from '@components/atoms/textField/TextFieldHookForm'
import {
  Grid,
  Icon,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export type SortFilter = {
  sorts: {
    no: number
    columnName: string
    condition: string // TODO: 협의필요
    data: any
  }[]
}

const COLUMN_NAME_SELECT = [
  {
    id: 1,
    value: 'groupName',
    label: '그룹명',
  },
  {
    id: 2,
    value: 'accountName',
    label: '거레처명',
  },

  {
    id: 3,
    value: 'tel',
    label: '전화번호',
  },
  {
    id: 4,
    value: 'ceoName',
    label: '대표자',
  },
]

const CONDITION_SELECT = [
  {
    id: 1,
    value: 'equal',
    label: '동일',
  },
  {
    id: 2,
    value: 'include',
    label: '포함',
  },

  {
    id: 3,
    value: 'exclude',
    label: '미포함',
  },
]

const AccountListFilter = () => {
  const { control, register } = useForm<SortFilter>({
    defaultValues: {
      sorts: [
        {
          no: 1,
          columnName: 'groupName',
          condition: 'equal',
          data: '안동',
        },
      ],
    },
  })

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<SortFilter>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'sorts', // unique name for your Field Array
  })

  return (
    <div>
      AccountListFilter
      {fields.map((item, index) => {
        console.log(item)
        return (
          <Grid
            container
            key={item.id}
            alignItems='cnnter'
            justifyContent='center'
            columnSpacing={2}
          >
            <Grid item xs='auto' my='auto'>
              <Typography>{index + 1}</Typography>
            </Grid>

            <Grid item xs={2}>
              <SelectHookForm
                control={control}
                name={`sorts.${index}.columnName`}
                selectDatas={COLUMN_NAME_SELECT}
              />
            </Grid>

            <Grid item xs={2}>
              <SelectHookForm
                control={control}
                name={`sorts.${index}.condition`}
                selectDatas={CONDITION_SELECT}
              />
            </Grid>

            <Grid item xs={3}>
              <TextFieldHookForm control={control} name={`sorts.${index}.data`} />
            </Grid>

            <Grid item xs='auto' my='auto'>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

export default AccountListFilter
