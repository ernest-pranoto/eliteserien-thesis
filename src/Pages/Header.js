import React, { useEffect } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
            <div className="main-logo">
                <Link to="/"><img src='eliteserienlogo.png' alt="eliteserien logo" aria-label="home"/></Link>
            </div>
            <nav className="nav">
                <Link to="/kamper">
                    <p className="header-text-1">match</p>
                </Link>
                <Link to="/result">
                    <p className="header-text-2">timeline</p>
                </Link>
                <a href="https://www.eliteserien.no/" target="_blank" className="eliteserien">eliteserien.no</a>
            </nav>
            </div>
        </div>
    )
}

export default Header;
