import TextFieldHookForm from '@components/atoms/textField/TextFieldHookForm'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { GENDER_RADIO_DATAS, QNA_QUESTION_DATAS, useJoinForms } from './data'
import DatePickerHookFormProps from '@atoms/datePicker/datePickerHookForm'
import 'dayjs/locale/ko'
import RadioHookForm from '@components/atoms/radio/RadioHookForm'
import SelectHookForm from '@components/atoms/select/TextFieldHookForm'
import { useNavigate } from 'react-router-dom'
import ROTUE_PATHS from '@libs/constants/routerPaths'

const JoinForm = () => {
  const { handleSubmit, onSubmit, control, errors } = useJoinForms()
  const navigate = useNavigate()

  return (
    <>
      <Typography variant='h4' textAlign='center' my={3}>
        회원가입
      </Typography>
      <form onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
        <Grid container direction='row' justifyContent='center' maxWidth='1200px' mx='auto'>
          <Grid item xs={12} md={6.5}>
            <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
              <Grid item xs={4.5} sm={2.5} md={3}>
                아이디
              </Grid>
              <Grid item xs>
                <TextFieldHookForm
                  control={control}
                  name='id'
                  error={errors.id}
                  placeholder='아이디를 입력하세요.'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
              <Grid item xs={4.5} sm={2.5} md={3}>
                비밀번호
              </Grid>
              <Grid item xs>
                <TextFieldHookForm
                  control={control}
                  name='password'
                  error={errors.password}
                  placeholder='비밀번호를 입력하세요.'
                  type='password'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
              <Grid item xs={4.5} sm={2.5} md={3}>
                비밀번호 확인
              </Grid>
              <Grid item xs>
                <TextFieldHookForm
                  control={control}
                  name='passwordCheck'
                  error={errors.passwordCheck}
                  placeholder='비밀번호 확인을 입력하세요.'
                  type='password'
                />
              </Grid>
            </Grid>
          </Grid>

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
                이메일
              </Grid>
              <Grid item xs>
                <TextFieldHookForm
                  control={control}
                  name='email'
                  error={errors.email}
                  placeholder='이메일을 입력하세요.'
                  type='email'
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
                  name='birthDate'
                  error={errors.birthDate}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Grid container alignItems='center' justifyContent='center' px={3} py={1.5}>
              <Grid item xs={4.5} sm={2.5} md={3}>
                성별
              </Grid>
              <Grid item xs>
                <RadioHookForm control={control} name='gender' radioDatas={GENDER_RADIO_DATAS} />
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
                  name='qnaQuestion'
                  error={errors.qnaQuestion}
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
                  name='qnaAnswer'
                  error={errors.qnaAnswer}
                  placeholder='비밀번호 찾기 답변을 입력하세요.'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Grid container alignItems='center' justifyContent='center' columnGap={4}>
              <Button variant='contained' className='my-5 w-40 py-4' type='submit'>
                <Typography fontSize='body1'>회원가입</Typography>
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
    </>
  )
}

export default JoinForm
