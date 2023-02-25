import TextFieldHookForm from '@components/atoms/textField/TextFieldHookForm'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useJoinForms } from './data'

const JoinForm = () => {
  const { handleSubmit, onSubmit, control, errors } = useJoinForms()
  return (
    <>
      <Grid container direction='column'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item xs={3}>
                아이디
              </Grid>
              <Grid item xs>
                <TextFieldHookForm control={control} error={errors.id} placeholder='' />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            placeholder='비밀번호를 입력하세요.'
            className='my-6'
            inputProps={{
              className: 'text-lg',
            }}
            variant='standard'
          />
        )}
      />

      <Button fullWidth variant='contained' className='my-5 py-4' type='submit'>
        <Typography fontSize='body1'>로그인</Typography>
      </Button>
    </>
  )
}

export default JoinForm
