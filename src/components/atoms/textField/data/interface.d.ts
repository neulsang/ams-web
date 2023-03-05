import { Control, FieldValues } from 'react-hook-form'

export type TextFieldHookFormProps = {
  control: Control<any, any>
  name: string
  error?: FieldErrors
  placeholder?: string
  type?: string
  size?: 'small' | 'medium'
}
