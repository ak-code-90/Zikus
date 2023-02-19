import React, { useEffect, useState } from 'react';
import '../styles/PlaylistsPage.css'
// import SpotifyWebApi from 'spotify-web-api-js'



export default function PlaylistsPage() {

    const [allPlaylists, setAllPlaylists] = useState([]);

    // const spotifyApi = new SpotifyWebApi({
    //     clientId: '435a00f8faec4c7f9dbe6186a0d606b7',
    //     clientSecret: '1a398417576c48b08b445f0d1e7903cb'
    // })

    // const myToken = 'BQAKDtmO7sbWR4EjgaPOT3duvW66Reu3vRIRozF9xTAjtaaKRZJmQ559kA3Z8iPytFqAymtRtRGz9E28ss-UpRm_-PndHcnASa3yACo5ay4VpgStFxkHbQG73Zrw06IyVOKtD4rnHbZxNopZWOJmxHdsEiYIowWA8Qrhf7r_wQGYeWgNwvOPxKxOZCP9DsfY_JP6-WXma6uwz8DMCedGLddnD7e1vuudyRSweSoeP2w8G3k7DQD6m-5LGhgMifCsQwi3aAfXSpKZNlg0iFZcZUGS02bE8VUQbVBTYRKJpUCkic45uO1iV0c2Tg'

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

    return (
        <div className='globalContainer'>
            Hello World
        </div>
    )
}