import React from 'react'
import president from 'assets/images/portfolio/president.jpg'
import news from 'assets/images/portfolio/news-portal.jpg'
import films from 'assets/images/portfolio/films-portal.jpg'
import pizza from 'assets/images/portfolio/pizza.jpg'
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
              <img src={news} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>News Portal</h3>
              <p>
                React, Redux, Redux Thunk, JS, TypeScript, HTML, SCSS, JS, Axios, React-router-dom
              </p>
              <a target='_blank' href='https://refadev.github.io/news-portal'>
                View Project
              </a>
            </div>
          </div>
					<div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={pizza} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>News Portal</h3>
              <p>
                React, Redux, React-paginate, JS, TypeScript, lodash.debaunce, HTML, SCSS, Skeleton, JS, Axios, React-router-dom
              </p>
              <a target='_blank' href='https://refadev.github.io/pizza'>
                View Project
              </a>
            </div>
          </div>
          <div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={films} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>Films Portal</h3>
              <p>
							React, Redux, Redux Thunk, JS, TypeScript, HTML, CSS, JS, Axios, React-router-dom
              </p>
              <a target='_blank' href='https://refadev.github.io/films-portal/#/'>
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
