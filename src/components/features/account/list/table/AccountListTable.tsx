import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Grid, Pagination, Stack } from '@mui/material'
import { axiosClient } from '@libs/api/base'

export type TablePagination = {
  page: number
  limit: number
}

export type Account = {
  uuid?: string
  no?: number
  groupName: string
  accountName: string
  tel: string
  ceoName: string
}

const AccountListTable = () => {
  const [rows, setRows] = useState<Account[]>([])
  const columns: GridColDef[] = [
    {
      field: 'no',
      headerName: '번호',
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'groupName',
      headerName: '그룹명',
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
    },
    {
      field: 'accountName',
      headerName: '거레처명',
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
    },
    {
      field: 'tel',
      headerName: '전화번호',
      sortable: false,
      width: 120,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'ceoName',
      headerName: '대표자명',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 70,
      headerAlign: 'center',
      align: 'center',
      /*   valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
    },
  ]

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [totalPage, setTotalPage] = useState(13)

  useEffect(() => {
    const fetchAccoutList = async ({ page, limit }: TablePagination) => {
      const resAccount = await axiosClient.instance.get<Account[]>(
        `http://devhong.asuscomm.com:13000/accounts?page=${page}&pageSize=${pageSize}`,
      )
      setRows(resAccount.data)
    }
    fetchAccoutList({ page: 1, limit: 10 })
  }, [page, pageSize])

  return (
    <Grid container alignItems='center' justifyContent='center' rowGap={2}>
      <Grid item xs={12}>
        <DataGrid
          getRowId={(row) => row.uuid}
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSize={pageSize}
          onPageSizeChange={(_pageSize) => setPageSize(_pageSize)}
          rowsPerPageOptions={[10, 25, 50]}
          autoHeight
          sx={{
            '.MuiTablePagination-actions': {
              display: 'none',
            },
            '.MuiTablePagination-displayedRows': {
              paddingRight: '10px',
            },
          }}
        />
      </Grid>
      <Grid item xs='auto'>
        <Pagination
          page={page}
          count={totalPage}
          siblingCount={1}
          boundaryCount={1}
          color='primary'
          onChange={(event: React.ChangeEvent<unknown>, page: number) => setPage(page)}
        />
      </Grid>
    </Grid>
  )
}

export default AccountListTable
