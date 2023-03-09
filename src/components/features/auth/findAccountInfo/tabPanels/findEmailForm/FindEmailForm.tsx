import SelectHookForm from '@components/atoms/select/TextFieldHookForm'
import TextFieldHookForm from '@components/atoms/textField/TextFieldHookForm'
import DatePickerHookFormProps from '@components/atoms/datePicker/datePickerHookForm'
import { QNA_QUESTION_DATAS } from '@components/features/auth/join/data'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useFindEmailForm } from './data'
import ROTUE_PATHS from '@libs/constants/routerPaths'
import { useNavigate } from 'react-router-dom'

const FindEmailForm = () => {
  const { handleSubmit, onSubmit, control, errors } = useFindEmailForm()
  const navigate = useNavigate()
  return (
    <form onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
      <Grid container direction='row' justifyContent='center'>
        <Grid item xs={12} md={6.5}>
          <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
            <Grid item xs={4.5} sm={2.5} md={3}>
              이름
            </Grid>
            <Grid item xs>
              <TextFieldHookForm
                control={control}
                name='name'
                error={errors.name}
                placeholder='이름을 입력하세요.'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6.5}>
          <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
            <Grid item xs={4.5} sm={2.5} md={3}>
              생년월일
            </Grid>
            <Grid item xs>
              <DatePickerHookFormProps
                control={control}
                name='birth_date'
                error={errors.birth_date}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6.5}>
          <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
            <Grid item xs={4.5} sm={2.5} md={3}>
              비밀번호 찾기
              <br /> 질문
            </Grid>
            <Grid item xs>
              <SelectHookForm
                control={control}
                name='qna.question'
                error={errors.qna?.question}
                selectDatas={QNA_QUESTION_DATAS}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6.5}>
          <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
            <Grid item xs={4.5} sm={2.5} md={3}>
              비밀번호 찾기
              <br /> 답변
            </Grid>
            <Grid item xs>
              <TextFieldHookForm
                control={control}
                name='qna.answer'
                error={errors.qna?.answer}
                placeholder='비밀번호 찾기 답변을 입력하세요.'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6.5}>
          <Grid container alignItems='center' justifyContent='center' columnGap={4}>
            <Button variant='contained' className='my-5 w-40 py-4' type='submit'>
              <Typography fontSize='body1'>이메일 찾기</Typography>
            </Button>

            <Button
              variant='contained'
              className='my-5 w-40 py-4'
              type='button'
              color='secondary'
              onClick={() => navigate(ROTUE_PATHS.ROOT)}
            >
              <Typography fontSize='body1'>취소</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default FindEmailForm
