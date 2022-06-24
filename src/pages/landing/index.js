import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from 'store/reducers/modal/modalSlice'
import styles from './landing.module.scss'
const SomeComponents = () => {
  return <div>Add some Modal Content</div>
}
const Landing = () => {
  const dispatch = useDispatch()
  const open = () => {
    dispatch(openModal({ content: <SomeComponents />, name: 'Some modal', show: true, size: 'lg' }))
  }
  console.log('landing',landing)
  return (
    <div className={styles.wrapper}>
      <h2>LANDING </h2>
      <button onClick={open}>Open modal</button>
    </div>
  )
}

export default Landing
