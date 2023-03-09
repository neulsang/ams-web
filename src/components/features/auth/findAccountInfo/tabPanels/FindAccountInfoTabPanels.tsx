import { TabPanel } from '@mui/lab'
import React from 'react'
import FindEmailForm from './findEmailForm/FindEmailForm'
import FindPasswordForm from './findPasswordForm/FindPasswordForm'

const FindAccountInfoTabPanels = () => {
  return (
    <>
      <TabPanel value='email'>
        <FindEmailForm />
      </TabPanel>
      <TabPanel value='password'>
        <FindPasswordForm />
      </TabPanel>
    </>
  )
}

export default FindAccountInfoTabPanels
