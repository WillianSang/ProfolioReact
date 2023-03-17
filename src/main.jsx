import react from 'react'
import Dom from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = Dom.createRoot(document.getElementById("root"))

root.render(
  <HashRouter>
    <App/>
  </HashRouter>
)