import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [appMessage, setAppMessage] = useState('Get Started')

  return (
    <div className="App">
      <div>
        <a href="https://developer.spotify.com/discover/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Zikus <br></br> <span className='slogan'>Écoutez Partagez Vibrez</span> </h1>
      <div className="card">
        <button onClick={() => setAppMessage((appMessage) => "Comming Soon")}>
          {appMessage}
        </button>
       
        <p style={{fontSize:'21px'}}>
          Partager des playlists spotify avec vos amis, commenter les nouveaux sons à la une !
          <br /> Et recevez des notifications lorsque vos playlists sont mises à jour
        </p>
      </div>
      <p className="read-the-docs">
        Cette application est conçue avec React ainsi que l'API de Spotify,
        cliquer sur les logos pour en apprendre plus sur ces technologies 
      </p>
    </div>
  )
}

export default App
