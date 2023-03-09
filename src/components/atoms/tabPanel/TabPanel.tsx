import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { TabPanelProps } from './data'
import React from 'react'

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`find-account-tabpanel-${index}`}
      aria-labelledby={`find-account-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default TabPanel
