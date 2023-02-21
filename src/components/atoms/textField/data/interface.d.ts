import { Control, FieldValues } from 'react-hook-form'

export type TextFieldHookFormProps = {
  control: Control<FieldValues, any>
  error?: FieldErrors
  placeholder?: string
}
