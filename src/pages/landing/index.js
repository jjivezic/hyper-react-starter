import React from 'react'
import styles from './landing.module.scss'
import Card from 'components/card'
const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Welcome</h2>
      <Card />
    </div>
  )
}

export default Landing
