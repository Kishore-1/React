import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserCard } from './UserCard.jsx'
import { QrCode } from './QrCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('cards')).render(
    <React.StrictMode>
      <UserCard />
    </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('qrcode')).render(
    <React.StrictMode>
      <QrCode/>
    </React.StrictMode>, 
)

