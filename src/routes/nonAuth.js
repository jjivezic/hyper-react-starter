import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { localStorageService } from 'services/localStorage.service'
const NonAuth = () => {
  const location = useLocation()
  console.log('Non auth location', location)
  return !localStorageService.isAuth() ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

export default NonAuth
