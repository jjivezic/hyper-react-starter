import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const TestRoute1 = () => {
  return (
    <div>
      Test route 1 - both auth and non auth can see this route. This route have children
      <NavLink to="child-1">click to see child 1</NavLink>
      <NavLink to="/users/333">Users</NavLink>
      <Outlet />
    </div>
  )
}

export default TestRoute1
