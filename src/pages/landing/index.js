import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from 'store/reducers/modal/modalSlice'
import styles from './landing.module.scss'
const SomeComponets = () => {
  return <div>Add some Modal Content</div>
}
const Landing = () => {
  const dispatch = useDispatch()
  const open = () => {
    dispatch(openModal({ content: <SomeComponets />, name: 'Some modal', show: true, size: 'lg' }))
  }
  return (
    <div className={styles.wrapper}>
      <h2>LANDING </h2>
      <button onClick={open}>Open modal</button>
    </div>
  )
}

export default Landing
