import React from 'react'
import { } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header({ }) {
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>Get Words</Link>
            </div>
            <a href="http://www.briandeitchman.com">My website</a>
            <div className="logo">
                <Link to='/fav'>Favorite Words</Link>
            </div>

        </header>
    )
}

export default Header