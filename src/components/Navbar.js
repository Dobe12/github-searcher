import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <Link to="/" className="nav-link"> Home </Link>
            </li>
            <li className="navbar-item">
                <Link to="/about" className="nav-link"> About</Link>
            </li>
        </ul>
    </nav>
)


