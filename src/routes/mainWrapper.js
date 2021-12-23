import React from 'react'
import Navbar from 'components/navbar'
import ModalWrapper from 'components/modal'
import { useSelector } from 'react-redux'
export const MainWrapper = props => {
  const store = useSelector(state => state)
  console.log('store modalllll', store)

  return (
    <div className="main-wraper">
      {store.modal.show ? (
        <ModalWrapper show={store.modal.show} content={store.modal.content} size={store.modal.size} />
      ) : null}
      <Navbar />
      {props.children}
    </div>
  )
}
