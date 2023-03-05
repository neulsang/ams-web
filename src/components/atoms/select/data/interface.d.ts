import { Control, FieldValues } from 'react-hook-form'

export type SelectHookFormProps = {
  control: Control<any, any>
  name: string
  error?: FieldErrors
  selectDatas: IFormControlLabel[]
  size?: 'small' | 'medium'
}
