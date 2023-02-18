import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import PlaylistsPage from './pages/PlaylistsPage'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/playlists' element={<PlaylistsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
