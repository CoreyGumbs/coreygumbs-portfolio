import React from 'react';

import './navigation.css';

const Navigation = () => {
    return(
        <header className="navigation-header">
            <nav className="nav-bar">
                <h1 className="nav-logo-txt">
                    Corey Gumbs | Web Dev
                </h1>
                <div className="nav-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;