import React, { useEffect, useReducer } from 'react'
import StudentForm from './StudentForm'
import AddStudent from './AddStudent'
import AppContext from 'src/contexts/AppContext'
import reducer from '../reducers/'
import '../scss/style.scss'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const APP_KEY = 'appWithRedux'

const AppContent = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
      }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>受講生名簿</strong>
            </CCardHeader>
            <CCardBody>
              <StudentForm />
              <AddStudent />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </AppContext.Provider>
  )
}

export default React.memo(AppContent)
