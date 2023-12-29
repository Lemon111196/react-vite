import './assets/scss/App.scss'
import { useRoutes } from 'react-router-dom'
import routes from "./routers/routes"

function App() {
  const router = useRoutes (routes())
  return <div className="app-container">{router}</div>
}

export default App
