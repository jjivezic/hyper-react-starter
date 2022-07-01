import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.scss'

const App = () => {
  return (
    <Suspense fallback="add loader here">
      <main className="main-wrapper">
        <Outlet />
      </main>
    </Suspense>
  )
}

export default App
