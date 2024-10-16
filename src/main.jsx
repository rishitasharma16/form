import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppState from './context/AppState.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppState>
  </StrictMode>,
)
