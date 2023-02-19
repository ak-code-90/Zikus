import React, { useEffect, useState } from 'react';
import '../styles/PlaylistsPage.css'
import SpotifyWebApi from 'spotify-web-api-js'

// importer dotenv et sécuriser toutes les donner sensibles ✅
// utiliser useParams pour recupérer les paramètres de l'URL ✅
// verifier que le params state de l'url est bien celui de notre application sinon rediriger ✅


export default function PlaylistsPage() {
    const [code, setCode] = useState('')
    const [spotifyState, setSpotifyState] = useState('')
    const [allPlaylists, setAllPlaylists] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        setCode(urlParams.get('code'));
        setSpotifyState(urlParams.get('state'))
    }, [])

    useEffect(() => {
        if (spotifyState === import.meta.env.VITE_STATE) {
            alert('Ok Ok')
        }
        else {
            alert('accès refusé')
            window.location = 'http://localhost:5173'
        }

    }, [spotifyState])

    const spotifyApi = new SpotifyWebApi({
        clientId: import.meta.env.VITE_CLIENT_ID,
        clientSecret: import.meta.env.VITE_CLIENT_SECRET
    })


    // async function getAllPlaylists() {
    //     spotifyApi.setAccessToken(myToken);
    //     const { items } = await spotifyApi.getUserPlaylists();
    //     setAllPlaylists(items)
    // }

    // useEffect(() => {
    //     getAllPlaylists();
    //     console.log(allPlaylists);
    // }, [])

    // useEffect(() => {
    //     console.log(allPlaylists);
    // }, [allPlaylists])

    { }
    return (
        <div className='globalContainer'>
            Hello World
        </div>
    )
}