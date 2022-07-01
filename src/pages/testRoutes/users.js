import React from 'react'
import { NavLink } from 'react-router-dom'
const Users = () => {
  return (
    <div>
      <h1>Users list</h1>
      <p>
        {' '}
        <NavLink to={`${13313}`}>Click to se User 1</NavLink>
      </p>
    </div>
  )
}

export default Users
