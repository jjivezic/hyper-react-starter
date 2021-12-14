import React from 'react'
import styles from './landingNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import LoanFilter from './filter'
import image from '../../resources/images/eating.jpg'

const LandingNav = () => {
  return (
    <div className="container p-0">
      <div className={styles.gridCol12Row12}>
        {/* Content Heading 1  */}
        <div className={styles.contentHeading1 + ' p-25'}>
          <span>Best Mortage Lenders 2021</span>
        </div>
        {/* Content Heading 2 */}
        <div className={styles.contentHeading2 + ' p-25'}>
          <span>Mortage rate comparison made simple</span>
        </div>
        {/* Content Heading 3 */}
        <div className={styles.contentHeading3 + ' p-25'}>
          <span>
            These handpicked lenders can turn your dream home into a reality, with low mortgage rates and good service.
            Take the deed into your hands, today.
          </span>
        </div>
        {/* Green circle */}
        <div className={styles.greenCircle}>
          <div className={styles.imgCover}></div>
          <img className={styles.image} src={image} alt="avatar"></img>
        </div>
        {/* Yellow middle circle */}
        <div className={styles.yellowMiddleCircle}>
          <div className="flex-center">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        {/* Green middle circle */}
        <div className={styles.greenMiddleCircle}></div>
        {/* Upper right yellow circle */}
        <div className={styles.upperRightYellowCircle}></div>
        <LoanFilter className={styles.loanFilter + ' p-25 my-1'} />
      </div>
    </div>
  )
}

export default LandingNav
