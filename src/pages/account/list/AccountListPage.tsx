import AccountListFilteContainer from '@containers/account/list/filter/AccountListFilteContainer'
import AccountListTableContainer from '@containers/account/list/table/AccountListTableContainer'
import React from 'react'

const AccountListPage = () => {
  return (
    <>
      <AccountListFilteContainer />
      <AccountListTableContainer />
    </>
  )
}

export default AccountListPage
