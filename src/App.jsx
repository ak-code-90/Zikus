import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const state = import.meta.env.VITE_STATE
  const redirect_uri = 'https://zikus.vercel.app/playlists';
  // const redirect_uri = 'http://localhost:5173/playlists';
  const scope = 'ugc-image-upload playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public'

  const getAccessToken = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=${state}&show_dialog=true&scope=playlist-read-private playlist-read-collaborative`
  };



  return (
    <div className="App">
      <div className='logoWrapper'>
        <a href="https://developer.spotify.com/discover/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Zikus <br></br> <span className='slogan'>Écoutez Partagez Vibrez</span> </h1>
      <div className="card">
        <button onClick={getAccessToken}>Get Started</button>
        <p style={{ fontSize: '21px' }}>
          Partagez des playlists spotify avec vos amis, commentez les nouveaux sons à la une !
          <br /> Et recevez des notifications lorsque vos playlists sont mises à jour
        </p>
      </div>
      <p className="read-the-docs">
        Cette application est conçue avec React ainsi que l'API de Spotify,
        cliquez sur les logos pour en apprendre plus sur ces technologies
      </p>
    </div>
  )
}

export default App
