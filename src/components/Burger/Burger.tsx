import React from 'react'

import './styles.scss'
interface IBurger {
  open: boolean
  setBurgerOpen: (arg0: boolean) => void
}

const Burger: React.FC<IBurger> = ({ open, setBurgerOpen }) => {
  const addOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('open')
    e.currentTarget.classList.toggle('close')
    if (e.currentTarget.classList.value === 'open') {
      setBurgerOpen(true)
    } else {
      setBurgerOpen(false)
    }
  }
  return (
    <div id='nav-icon1' onClick={addOpen} className={open ? 'open' : 'close'}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger
