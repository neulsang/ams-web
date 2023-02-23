import { IFormControlLabel } from '@libs/interfaces/commons'
import { Control, FieldValues } from 'react-hook-form'

export type RadioHookFormProps = {
  control: Control<any, any>
  name: string
  radioDatas: IFormControlLabel[]
}
