import FindAccountInfoTabPanels from '@components/features/auth/findAccountInfo/tabPanels/FindAccountInfoTabPanels'
import FindAccountInfoTabs from '@components/features/auth/findAccountInfo/tabs/FindAccountInfoTabs'
import TabContext from '@mui/lab/TabContext'
import { Grid } from '@mui/material'
import React, { useState } from 'react'

function FindAccountInfoContainer() {
  const [selectedTab, setSelectedTab] = useState('email')

  return (
    <Grid container direction='row' justifyContent='center' maxWidth='1200px' mx='auto'>
      <TabContext value={selectedTab}>
        <FindAccountInfoTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <FindAccountInfoTabPanels />
      </TabContext>
    </Grid>
  )
}

export default FindAccountInfoContainer
