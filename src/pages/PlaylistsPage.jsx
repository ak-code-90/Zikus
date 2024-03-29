import React, { useEffect, useState } from 'react';
import '../styles/PlaylistsPage.css'
import SpotifyWebApi from 'spotify-web-api-js'
import { Link, Navigate, redirect } from 'react-router-dom';
import Navbar from '../components/Navbar'


// utiliser useParams pour recupérer les paramètres de l'URL ✅
// verifier que le params state de l'url est bien celui de notre application sinon rediriger ✅
// utiliser le code pour récuperer l'access token ✅
// faire un appel api avec le token pour récuperer toutes les playlists ✅
// afficher les playlists partagées ✅
// créer une page playlist details avec toutes les pistes d'une playlist et afficher cette page lors du clique sur la playlist

// créer une belle UI qui garde une cohérence sur toutes les pages. 
// refactor tout le process de récupération du token d'accès dans un custom hook
// même chose pour les calls vers la Spotify API (endpoint en paramètre)
// refactor les composants pour qu'ils soient réutilisables
// refactor pr mieux gerer le CSS
// refactor pour gérer les states avec Redux



export default function PlaylistsPage() {
    const [code, setCode] = useState('')
    const [token, setToken] = useState('')
    const [spotifyState, setSpotifyState] = useState('')
    const [allPlaylists, setAllPlaylists] = useState([])

    // récupération du code d'autorisation
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        setCode(urlParams.get('code'));
        setSpotifyState(urlParams.get('state'))
        const error = urlParams.get('error')
        if (spotifyState && spotifyState !== import.meta.env.VITE_STATE || error) {
            window.location = '/'
        }
    }, [])

    useEffect(() => {
        //recupération 
        if (code) {
            const data = new URLSearchParams();
            data.append("grant_type", "authorization_code");
            data.append("redirect_uri", "https://zikus.vercel.app/playlists");
            //  data.append("redirect_uri", "http://localhost:5173/playlists");
            data.append("code", code);

            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)
                },
                body: data
            })
                .then(response => response.json())
                .then(data => setToken(data.access_token))
                .catch(error => console.error(error));
        }
    }, [code])


    const spotifyApi = new SpotifyWebApi({
        clientId: import.meta.env.VITE_CLIENT_ID,
        clientSecret: import.meta.env.VITE_CLIENT_SECRET
    })

    async function getAllPlaylists() {
        spotifyApi.setAccessToken(token);
        const { items } = await spotifyApi.getUserPlaylists();
        setAllPlaylists(items.filter(playlist => playlist.collaborative === true))
    }

    useEffect(() => {
        if (token) {
            getAllPlaylists()
        }
    }, [token]);

    return (
        <>
            <Navbar />
            {allPlaylists.map(playlist =>
                <div key={playlist.id} className="playlist-card">
                    {playlist && (
                        <>
                            <img src={playlist.images[0].url} alt={playlist.name} />
                            <h2>{playlist.name}</h2>
                            <p>By {playlist.owner.display_name}</p>
                        </>
                    )}
                </div>
            )}
        </>
    )

}