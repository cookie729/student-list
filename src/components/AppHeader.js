// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   CContainer,
//   CHeader,
//   CHeaderDivider,
//   CHeaderNav,
//   CHeaderToggler,
//   CNavLink,
//   CNavItem,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// const AppHeader = () => {
//   const dispatch = useDispatch()
//   const sidebarShow = useSelector((state) => state.sidebarShow)

//   return (
//     <CHeader position="sticky" className="mb-4">
//       <CContainer fluid>
//         <CHeaderToggler
//           className="ps-1"
//           onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
//         >
//           <CIcon icon={cilMenu} size="lg" />
//         </CHeaderToggler>
//         <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
//         <CHeaderNav>
//           <CNavItem>
//             <CNavLink href="#">
//               <CIcon icon={cilBell} size="lg" />
//             </CNavLink>
//           </CNavItem>
//           <CNavItem>
//             <CNavLink href="#">
//               <CIcon icon={cilList} size="lg" />
//             </CNavLink>
//           </CNavItem>
//           <CNavItem>
//             <CNavLink href="#">
//               <CIcon icon={cilEnvelopeOpen} size="lg" />
//             </CNavLink>
//           </CNavItem>
//         </CHeaderNav>
//       </CContainer>
//       <CHeaderDivider />
//     </CHeader>
//   )
// }

// export default AppHeader

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeOpen, cilHome, cilMenu, cilSettings } from '@coreui/icons'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilHome} size="lg" alt="home" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilSettings} size="lg" alt="settings" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader