import ava2 from 'assets/images/ava2.jpg'

import React from 'react'
import contact from 'assets/images/contact.svg'
import gmail from 'assets/images/gmail.svg'
import phone from 'assets/images/phone.svg'
import telegram from 'assets/images/telegram.svg'

import './styles.scss'
const Contacts = () => {
  return (
    <section className='contacts'>
      <div className='container'>
        <div className='contacts-content'>
          <div className='contact-me'>
            <h2 className='text text_contact' translate='no'>
              Contact <span>me.</span>
            </h2>
            <div className='contacts-info'>
              <div className='contacts-info__item'>
                <img src={contact} alt='' />
                <div>
                  <h3>Name</h3>
                  <p>Refat Abdukarimov</p>
                </div>
              </div>
              <div className='contacts-info__item'>
                <img src={gmail} alt='' />
                <div>
                  <h3>Mail</h3>
                  <p>
                    <a href='mailto:qwebecooll@gmail.com'>
                      qwebecooll@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className='contacts-info__item'>
                <img src={phone} alt='' />
                <div>
                  <h3>Call</h3>
                  <p>
                    <a href='tel:+79780852902'>+7 (978) 085 29 02</a>
                  </p>
                </div>
              </div>
              <div className='contacts-info__item'>
                <img src={telegram} alt='' />
                <div>
                  <h3>Telegram</h3>
                  <p>
                    <a href='https://t.me/r_abdukarimov'>t.me/r_abdukarimov</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='ramka-5 ramka-5_contact'>
            <img className='contact-me__image' src={ava2} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
