import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/actions/modal.actions';
import styles from './landing.module.scss';
const SomeComponets = () => {
  return (
    <div>
      Add some Modal Content
    </div>
  )
}
const Landing = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalActions.openModal(<SomeComponets />, 'Some modal', 'lg'));
  }
  return (
    <div className={styles.wrapper}>
      <h2>LANDING </h2>
      <button onClick={openModal}>Open modal</button>
    </div>)
}

export default Landing;