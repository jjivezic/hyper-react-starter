import ModalWrapper from 'components/modal'
import Navbar from 'components/navbar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

const App = () => {
  const store = useSelector(state => state)
  return (
    <main className="main-wrapper">
      <Navbar />
      {store.modal.show ? (
        <ModalWrapper show={store.modal.show} content={store.modal.content} size={store.modal.size} />
      ) : null}
      {/* <Socket/> */}
      <ToastContainer className="toast" toastClassName="toast-wrapper" bodyClassName="toast-body" closeButton={false} />
      <Outlet />
    </main>
  )
}

export default App
