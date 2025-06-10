import React from 'react';
import menuLinksData from './data/menu_links.json';

const Header = () => {
    return (
        <header>
            <div className="topnav">
                <div className="topnav_left">
                    <a className="active" href="index.html">Home</a>
                </div>
                <div className="topnav_right">
                    {
                        menuLinksData.map((link) =>
                            <a href={link.href} target={link.target}>{link.text}</a>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;