import React from 'react'
import styles from './landing.module.scss'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faPhoneVolume, faChartLine, faCircle } from '@fortawesome/free-solid-svg-icons'
const Landing = () => {
  
  return (
    <div className={styles.wrapper}>
      <h2>Welcome</h2>
      <div className="container">
        <div className="card grid-12-8">
          {/* Header left corner  */}
          <div className="item-header-number">
            <span>1</span>
          </div>
          {/* Header title  */}
          <div className="item-header-title flex-center">
            <div className='flex-center'>
              <div className='icon'>
                <FontAwesomeIcon icon={faTrophy}/>
              </div>
              <strong>Best choise 2021</strong>
            </div>
          </div>
          {/* Heading left  */}
          <div className="item-heading-left">
            <div className="flex-center">
              <h3>Quicken Loans</h3>
              <span>NMLS #3030</span>
            </div>
          </div>
          {/* Heading right  */}
          <div className="item-heading-right">
            <div className="flex-center">
              <h3>9.6</h3>
              <span>Editorial score</span>
            </div>
          </div>
          {/* Content title  */}
          <div className="item-content-title">
            <p>Quicken Loans</p>
          </div>
          {/* Content body  */}
          <div className="item-content-body">
            <div>
              <p><FontAwesomeIcon icon={faCircle}/>  In ullamcorper ipsum ac quam scelerisque</p>
              <p><FontAwesomeIcon icon={faCircle}/>  Suspendisse nec lobortis dui.</p>
              <p><FontAwesomeIcon icon={faCircle}/>  Excepteur sint occaecat cupidatat non pro</p>
            </div>
          </div>
          {/* Content left  */}
          <div className="item-content-left">
            <p>Max. loan amount</p>
          </div>
          {/* Content right  */}
          <div className="item-content-right">
            <p>$900k</p>
          </div>
          {/* Content button  */}
          <div className="item-content-button">
            <button>
              <span>View Rates</span>
            </button>
          </div>
          {/* Content phone number  */}
          <div className="item-content-phone">
            <FontAwesomeIcon icon={faPhoneVolume}/>
            <span>+(123)-450-7890</span>
          </div>
          {/* Footer */}
          <div className="item-footer">
            <div>
              <FontAwesomeIcon icon={faChartLine}/>
              <span> 5.654 people visited this site today</span>
            </div>
          </div>
          {/* Read Review only visible on desktop view */}
          <div className="item-footer-review">
            <div>
              <span>Read review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
