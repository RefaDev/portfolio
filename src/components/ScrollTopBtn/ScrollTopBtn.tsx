import { scrollTop } from 'utils/scrollToTop'
import arrTop from 'assets/images/arr-top.svg'
import './styles.scss'
const ScrollTopBtn = () => {
   return (
      <button className='scroll-top' onClick={scrollTop}>
         <img src={arrTop} alt="arr-top"/>
      </button>
   )
}

export default ScrollTopBtn
