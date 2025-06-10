import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="topnav">
                <div className="topnav_left">
                    <a className="active" href="index.html">Home</a>
                </div>
                <div className="topnav_right">
                    <a href="https://www.youtube.com/channel/UC9ANTlNBUvqEGknQaEGn6jg" target="_blank">Youtube Channel</a>
                    <a href="https://www.linkedin.com/in/savannah-harvey1/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </header>
    );
}

export default Header;