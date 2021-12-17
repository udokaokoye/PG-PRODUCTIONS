import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav>
                <div className="inner">
                    <div className="logo"></div>
                    <div className="links">
                        <Link className="nav_link">Home</Link>
                        <Link className="nav_link">Services</Link>
                        <Link className="nav_link">About</Link>
                        <Link className="nav_link">Portfolio</Link>
                        <Link className="nav_link">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
