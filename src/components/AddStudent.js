import React, { useContext } from 'react'
import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import StudentUpdate from './StudentUpdate'
import AppContext from '../contexts/AppContext'

const AddStudent = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
            <CTableHeaderCell scope="col">氏名</CTableHeaderCell>
            <CTableHeaderCell scope="col">メールアドレス</CTableHeaderCell>
            <CTableHeaderCell scope="col">電話番号</CTableHeaderCell>
            <CTableHeaderCell scope="col">パスワード</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* {state.studentsUpdate.map((event, index) => ( */}
          {state.events.map((event, index) => (
            <StudentUpdate key={index} event={event} />
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default AddStudent
