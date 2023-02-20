import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavBar from '../Navbar/PublicNavBar';
function PublicLayout() {
  return (
    <div>
      <PublicNavBar/>
      <Outlet/>
    </div>
  )
}

export default PublicLayout;
