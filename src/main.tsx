import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/scss/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <App />
    </Router>

)
