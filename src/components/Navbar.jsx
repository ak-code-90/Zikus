import React from 'react';
import '../styles/PlaylistsPage.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Shared Playlists</h1>
            <div>
                <a href="#" className="active">Home</a>
                <a href="#">Profile</a>
                <Link to='/'>Logout</Link>
                {/* <a href="/">Logout</a> */}
            </div>
        </nav>
    );
};

export default Navbar;
