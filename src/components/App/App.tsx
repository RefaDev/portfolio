import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import About from 'pages/About/About'
import Contacts from 'pages/Contacts/Contacts'
import Home from 'pages/Home/Home'
import Portfolio from 'pages/Portfolio/Portfolio'
import { Route, Routes, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'

import 'scss/App.scss'

const App = () => {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      transform: `translate3d(100%, 0, 0)`,
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: `translate3d(-50%, 0, 0)`,
    },
  })

  
  return (
    <div className='wrapper'>
      <Header />

      <div className='main'>
        {transitions.map(({ item, props: transition, key }) => (
          <animated.div className='main__wrapper' key={key} style={transition}>
            <Routes location={item}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/myworks' element={<Portfolio />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </animated.div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
