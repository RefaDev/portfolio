import React, { useState } from 'react'
import logo from 'assets/images/logo.svg'
import Burger from 'components/Burger/Burger'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Header = () => {
  const [burgerOpen, SetBurgerOpen] = useState(false)

  const closeBurger = () => {
    SetBurgerOpen(false)
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
         <div className="header_logo">
				 <NavLink to='https://RefaDev.github.io/portfolio/'>
            <img src={logo} alt='logo' />
          </NavLink>
				 </div>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink
                  to='https://RefaDev.github.io/portfolio/'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='https://RefaDev.github.io/portfolio/about'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  ABOUT ME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='https://RefaDev.github.io/portfolio/portfolio'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='https://RefaDev.github.io/portfolio/contacts'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
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
                    to='https://RefaDev.github.io/portfolio/'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={closeBurger}
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='https://RefaDev.github.io/portfolio/about'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={closeBurger}
                  > 
                    ABOUT ME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='https://RefaDev.github.io/portfolio/portfolio'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={closeBurger}
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='https://RefaDev.github.io/portfolio/contacts'
                    className={({ isActive }) => (isActive ? 'active' : '')}
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
