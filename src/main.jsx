import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//créer un systeme de rooting avec le path complet et redéployer sous github pages


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
