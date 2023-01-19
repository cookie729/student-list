import React, { useContext, useState } from 'react'
import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { CREATE_STUDENT } from '../actions'
import AppContext from '../contexts/AppContext'

const StudentForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const addStudent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_STUDENT,
      name,
      email,
      phone,
      password,
    })
    setName('')
    setEmail('')
    setPhone('')
    setPassword('')
  }

  const unCreatable = name === '' || email === '' || phone === '' || password === ''

  return (
    <>
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <div id="studentHeight">
            <CAccordionHeader>
              受講生を追加
              <CIcon id="plus-icon" icon={cilPlus} size="sm" alt="home" />
            </CAccordionHeader>
          </div>
          <CAccordionBody>
            <CInputGroup size="sm" className="mb-3">
              <CInputGroupText id="inputGroup-sizing-sm">氏名</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CInputGroup>
            <CInputGroup size="sm" className="mb-3">
              <CInputGroupText id="inputGroup-sizing-sm">メールアドレス</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CInputGroup>
            <CInputGroup size="sm" className="mb-3">
              <CInputGroupText id="inputGroup-sizing-sm">電話番号</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </CInputGroup>
            <CInputGroup size="sm" className="mb-3">
              <CInputGroupText id="inputGroup-sizing-sm">パスワード</CInputGroupText>
              <CFormInput
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CInputGroup>
            <CButton color="primary" id="primaryBtn" onClick={addStudent} disabled={unCreatable}>
              名簿に追加
            </CButton>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  )
}

export default StudentForm
