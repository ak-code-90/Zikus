import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const client_id = '435a00f8faec4c7f9dbe6186a0d606b7';
  const client_secret = '1a398417576c48b08b445f0d1e7903cb';
  const redirect_uri = 'http://localhost:5173/playlists';
  const authorization_code = 'AUTHORIZATION_CODE';
  const scope = 'user-read-email user-read-private user-library-modify user-library-read playlist-modify-public user-read-playback-position user-top-read user-read-recently-played user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public app-remote-control streaming user-read-playback-state user-modify-playback-state user-read-currently-playing ugc-image-upload'
  const state = 'fklzjlkcel132sukizdjezk12'

  const getAccessToken = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=${state}&scope=${scope}&show_dialog=true`

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
