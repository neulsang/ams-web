import TabList from '@mui/lab/TabList'
import { Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FindAccountInfoTabsProps } from './data'

const FindAccountInfoTabs = ({ selectedTab, setSelectedTab }: FindAccountInfoTabsProps) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList value={selectedTab} onChange={(e, value) => setSelectedTab(value)}>
        <Tab label='이메일' value='email' />
        <Tab label='비밀번호' value='password' />
      </TabList>
    </Box>
  )
}

export default FindAccountInfoTabs
