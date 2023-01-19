import React, { useContext } from 'react'
import { CButton, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import { DELETE_STUDENT } from '../actions'
import AppContext from '../contexts/AppContext'

const StudentUpdate = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `受講生「${id}.${event.name}さん」を本当に削除してもよろしいですか？`,
    )
    if (result) {
      dispatch({ type: DELETE_STUDENT, id })
    }
  }

  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
      <CTableDataCell>{event.name}</CTableDataCell>
      <CTableDataCell>{event.email}</CTableDataCell>
      <CTableDataCell>{event.phone}</CTableDataCell>
      <CTableDataCell>{event.password}</CTableDataCell>
      <CTableDataCell>
        <CButton color="danger" className="delete-btn" size="sm" onClick={handleClickDeleteButton}>
          削除
        </CButton>
      </CTableDataCell>
    </CTableRow>
  )
}

export default StudentUpdate
