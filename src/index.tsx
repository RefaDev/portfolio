import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from 'utils/scrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter basename='/portfolio'>
    <ScrollToTop />
    <App />
  </HashRouter>
)
