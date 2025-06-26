import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/crypto-tracker">
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
