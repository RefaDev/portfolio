import React from 'react'
import { NavLink } from 'react-router-dom'
import ava from 'assets/images/ava.jpg'
import './styles.scss'
import Hexagon from 'components/hexagon/Hexagon'
const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='home_content'>
          <h1>
            Hi there, <span>I'm Refat</span>, a front-end developer. <br /> I'm
            glad you're here.
          </h1>
          <h2 className='text' translate='no'>
            Let me tell{' '}
            <NavLink to='/about'>
              <span>about myself.</span>
            </NavLink>
          </h2>
          
          <div className='ramka-5'>
					<img src={ava} alt='' />
						
					</div>
          <Hexagon />
        </div>
      </div>
    </section>
  )
}

export default Home
