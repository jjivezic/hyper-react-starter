import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.scss'
import { Routes } from './routes/routes'

const App = () => {
  return (
    <div id="App">
      <Suspense fallback="add loader here">
        <main className="main-wrapper">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </main>
      </Suspense>
    </div>
  )
}

export default App
