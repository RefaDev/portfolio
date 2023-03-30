import gitlab from 'assets/images/gitlab.svg'
import gmail from 'assets/images/gmail.svg'
import phone from 'assets/images/phone.svg'
import telegram from 'assets/images/telegram.svg'
import './styles.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_contacts'>
          <ul>
            <li>
              <a target='_blank' href='https://gitlab.com/R_Abdukarimov'>
                <img src={gitlab} alt='' />
              </a>
            </li>
            <li>
              <a  href='mailto:qwebecooll@gmail.com'>
                <img src={gmail} alt='' />
              </a>
            </li>
            <li>
              <a  href='tel:+79780852902'>
                <img src={phone} alt='' />
              </a>
            </li>
            <li>
              <a target='_blank' href='https://t.me/r_abdukarimov'>
                <img src={telegram} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
