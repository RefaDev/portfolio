import React from 'react'
import president from 'assets/images/portfolio/president.jpg'
import './styles.scss'

const Portfolio = () => {

  return (
    <section className='portfolio'>
      <div className='container'>
        <div className='portfolio-content'>
          <h2>
            <span>My</span> Portfolio
          </h2>
          <p>
            Some of my <span>works</span>
          </p>
          <div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={president} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>President Car</h3>
              <p>
                React, HTML, SCSS, JS, Axios, Formik, Yup, Telegram API, Frame
                Motion, React-router-dom, Swiper
              </p>
              <a target='_blank' href='https://refadev.github.io/presidentcar'>
                View Project
              </a>
            </div>
          </div>
          <div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={president} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>President Car</h3>
              <p>
                React, HTML, SCSS, JS, Axios, Formik, Yup, Telegram API, Frame
                Motion, React-router-dom, Swiper
              </p>
              <a target='_blank' href='https://refadev.github.io/presidentcar'>
                View Project
              </a>
            </div>
          </div>
          <div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={president} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>President Car</h3>
              <p>
                React, HTML, SCSS, JS, Axios, Formik, Yup, Telegram API, Frame
                Motion, React-router-dom, Swiper
              </p>
              <a target='_blank' href='https://refadev.github.io/presidentcar'>
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
