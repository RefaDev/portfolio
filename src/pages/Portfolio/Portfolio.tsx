import React from 'react'
import president from 'assets/images/portfolio/president.jpg'
import news from 'assets/images/portfolio/news-portal.jpg'
import films from 'assets/images/portfolio/films-portal.jpg'
import pizza from 'assets/images/portfolio/pizza.jpg'
import pulse from 'assets/images/portfolio/pusle.jpg'
import todo from 'assets/images/portfolio/todo.jpg'
import cardGame from 'assets/images/portfolio/card-game.jpg'

import './styles.scss'

const Portfolio = () => {

  return (
    <section className='portfolio'>
      <div className='container'>
        <div className='portfolio-content'>
					<h2 className='text text_portfolio' translate='no'>
            Some of <span>my works.</span>
          </h2>
					<div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={cardGame} alt='card-game' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>Card game</h3>
              <p>
                HTML, CSS, JS
              </p>
              <a target='_blank' href='https://refadev.github.io/card-game'>
                View Project
              </a>
            </div>
          </div>
					<div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={todo} alt='todo' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>Simple Todo list</h3>
              <p>
                JSX, Tailwind, JS, SCSS, React-icons
              </p>
              <a target='_blank' href='https://refadev.github.io/todo'>
                View Project
              </a>
            </div>
          </div>
					<div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={pulse} alt='pulse' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>Pulse</h3>
              <p>
                HTML, SCSS, JS, BEM, Gulp, Webpack, PHPmailer, SwiperJS
              </p>
              <a target='_blank' href='https://refadev.github.io/pulse'>
                View Project
              </a>
            </div>
          </div>
          <div className='portfolio-content__item'>
            <div className='portfolio-img'>
              <img src={news} alt='president car' />
            </div>
            <div className='portfolio-content__item-descr'>
              <h3>News Portal</h3>
              <p>
                React, Redux, Redux Thunk, JS, TypeScript, HTML, SCSS, Axios, React-router-dom
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
              <h3>Pizza</h3>
              <p>
                React, Redux, React-paginate, JS, TypeScript, lodash.debaunce, HTML, SCSS, Skeleton, Axios, React-router-dom
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
							React, Redux, Redux Thunk, JS, TypeScript, HTML, CSS, Axios, React-router-dom
              </p>
              <a target='_blank' href='https://refadev.github.io/films-portal'>
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
