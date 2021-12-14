import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'
import SideMenu from './sideMenu'
import { Link } from 'react-router-dom'
import { SideMenuLinks } from '../../store/dummyStore'
import Dropdown from 'components/dropdown'
import logo from '../../logo.svg'

const Navbar = () => {
  const store = useSelector((state) => state)
  const [toggleMenuDrawer, setToggleMenuDrawer] = useState(false)
  console.log('STORE', store)
  const mobileMenuClickHandler = () => {
    setToggleMenuDrawer(true)
  }
  return (
    <>
      <div className="nav-wrapper">
        <header>
          <div className="nav-container">
            <div className="logo-container nav-item">
              <img src={logo} alt="logo" className="logo-img" />
              <Link to="/">
                <h2>DeliveryRank</h2> <i className="fab fa-react" />
              </Link>
            </div>
            <div className="menu-links-container nav-item">
              {SideMenuLinks.map((item, index) => {
                return (
                  <>
                    {!(item.childElems.length > 0) && (
                      <Link key={index} to={item.path} className="nav-item">
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                    {item.childElems.length > 0 && <Dropdown label={item.title} options={item.childElems} />}
                  </>
                )
              })}
            </div>
            <div className="menu-btn-container nav-item">
              <button className="menu-btn" onClick={mobileMenuClickHandler}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </header>
        <SideMenu isOpen={toggleMenuDrawer} onClose={setToggleMenuDrawer} />
      </div>
    </>
  )
}

export default Navbar
