import React from 'react'
import styles from './landing.module.scss'
import Card from 'components/card'
import LandingNav from 'components/landingNav'
const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <LandingNav />
      <Card />
    </div>
  )
}

export default Landing
