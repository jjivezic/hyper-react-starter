import React, { useState } from 'react'
import './dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Dropdown = ({ label, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const buttonClickHandler = () => {
    if (window.innerWidth < 992) setIsDropdownOpen(!isDropdownOpen)
  }
  const mouseEnterHandler = () => {
    if (window.innerWidth >= 992) setIsDropdownOpen(true)
  }
  const mouseLeaveHandler = () => {
    if (window.innerWidth >= 992) setIsDropdownOpen(false)
  }
  return (
    <>
      <div className="dropdown-container" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <button className="dropdown-title" onClick={buttonClickHandler}>
          <span>{label}</span>
          <div className="dropdown-icon">
            {isDropdownOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </div>
        </button>
        <div className={isDropdownOpen ? 'dropdown-options active' : 'dropdown-options'}>
          {options.map((elem, index) => {
            return (
              <Link key={index} to={elem.path} className={elem.class}>
                {elem.title}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dropdown
