import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faPhoneVolume, faChartLine, faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './card.module.scss'

const Card = () => {
  console.log(styles)
  return (
    <div className={styles.container}>
      <div className={styles.card + ' ' + styles.gridCol12Row8}>
        {/* Header left corner  */}
        <div className={styles.itemHeaderNumber}>
          <span>1</span>
        </div>
        {/* Header title  */}
        <div className={styles.itemHeaderTitle + ' ' + styles.flexCenter}>
          <div className={styles.flexCenter}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <strong>Best choise 2021</strong>
          </div>
        </div>
        {/* Heading left  */}
        <div className={styles.itemHeadingLeft}>
          <div className={styles.flexCenter}>
            <h3>Quicken Loans</h3>
            <span>NMLS #3030</span>
          </div>
        </div>
        {/* Heading right  */}
        <div className={styles.itemHeadingRight}>
          <div className={styles.flexCenter}>
            <h3>9.6</h3>
            <span>Editorial score</span>
          </div>
        </div>
        {/* Content title  */}
        <div className={styles.itemContentTitle}>
          <p>Quicken Loans</p>
        </div>
        {/* Content body  */}
        <div className={styles.itemContentBody}>
          <div>
            <p>
              <FontAwesomeIcon icon={faCircle} /> In ullamcorper ipsum ac quam scelerisque
            </p>
            <p>
              <FontAwesomeIcon icon={faCircle} /> Suspendisse nec lobortis dui.
            </p>
            <p>
              <FontAwesomeIcon icon={faCircle} /> Excepteur sint occaecat cupidatat non pro
            </p>
          </div>
        </div>
        {/* Content left  */}
        <div className={styles.itemContentLeft}>
          <p>Max. loan amount</p>
        </div>
        {/* Content right  */}
        <div className={styles.itemContentRight}>
          <p>$900k</p>
        </div>
        {/* Content button  */}
        <div className={styles.itemContentButton}>
          <button>
            <span>View Rates</span>
          </button>
        </div>
        {/* Content phone number  */}
        <div className={styles.itemContentPhone}>
          <FontAwesomeIcon icon={faPhoneVolume} />
          <span>+(123)-450-7890</span>
        </div>
        {/* Footer */}
        <div className={styles.itemFooter}>
          <div>
            <FontAwesomeIcon icon={faChartLine} />
            <span> 5.654 people visited this site today</span>
          </div>
        </div>
        {/* Read Review only visible on desktop view */}
        <div className={styles.itemFooterReview}>
          <div>
            <span>Read review</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
