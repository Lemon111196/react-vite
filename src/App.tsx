import './assets/scss/App.scss'
import { useRoutes } from 'react-router-dom'
import routes from "./routers/routes"
import SetAuthContextProvider from './contexts/setAuth'

function App() {
  const router = useRoutes(routes())
  return <div className="app-container">
    <SetAuthContextProvider>
      {router}
    </SetAuthContextProvider>
  </div>
}

export default App
