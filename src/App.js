import React, { useEffect, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.scss'
import { Routes } from './routes/routes'
import { history } from './utils'

const App = () => {
  useEffect(() => {
    history.listen((location, action) => {
      console.log('Locations', location, action)
      // clear alert on location change
    })
  }, [])

  return (
    <div id="App">
      <Suspense fallback="add loader here">
        <main className="main-wrapper">
          <BrowserRouter history={history}>
            <Routes />
          </BrowserRouter>
        </main>
      </Suspense>
    </div>
  )
}

export default App
