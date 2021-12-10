import React from 'react'
import { Link } from 'react-router-dom'
import './sideMenu.scss'
import { SideMenuLinks } from './navbarStore'
import Dropdown from 'components/dropdown'

const SideMenu = (props) => {
  const handleDrawerClose = () => {
    props.onClose(false)
  }
  return (
    <div className={props.isOpen ? 'nav-menu active' : 'nav-menu'}>
      <div className="flex-container">
        <div className="nav-menu-list">
          <ul className="nav-menu-items">
            {/* Rendering links */}
            {SideMenuLinks.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  {!(item.childElems.length > 0) && (
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                  {item.childElems.length > 0 && <Dropdown label={item.title} options={item.childElems} />}
                </li>
              )
            })}
            <li>
              <Link to="#" className="menu-bars"></Link>
            </li>
          </ul>
        </div>
        <div className="nav-menu-footer">
          <button onClick={handleDrawerClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
export default SideMenu
