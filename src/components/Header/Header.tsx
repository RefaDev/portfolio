import React, { useState } from 'react'
import logo from 'assets/images/logo.svg'
import Burger from 'components/Burger/Burger'
import { NavLink } from 'react-router-dom'

import './styles.scss'
import { addActiveToNavLinks } from 'utils/addActiveToNavLinks'

const Header = () => {
  const [burgerOpen, SetBurgerOpen] = useState(false)

  const closeBurger = () => {
    SetBurgerOpen(false)
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='header_logo'>
            <NavLink to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' className={addActiveToNavLinks}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className={addActiveToNavLinks}>
                  ABOUT ME
                </NavLink>
              </li>
              <li>
                <NavLink to='/myworks' className={addActiveToNavLinks}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink to='/contacts' className={addActiveToNavLinks}>
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </nav>
          {burgerOpen && (
            <nav className='nav-burger'>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    className={addActiveToNavLinks}
                    onClick={closeBurger}
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className={addActiveToNavLinks}
                    onClick={closeBurger}
                  >
                    ABOUT ME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/myworks'
                    className={addActiveToNavLinks}
                    onClick={closeBurger}
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contacts'
                    className={addActiveToNavLinks}
                    onClick={closeBurger}
                  >
                    CONTACTS
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
          <Burger open={burgerOpen} setBurgerOpen={SetBurgerOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
