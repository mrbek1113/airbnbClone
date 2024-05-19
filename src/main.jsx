import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './Routers/Route'
import UserProvider from './Context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
      <UserProvider>
      <Routers/>
      </UserProvider>
    </div>
)
