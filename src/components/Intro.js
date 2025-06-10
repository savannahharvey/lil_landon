import React from 'react';
import buttonLinksData from './data/button_links.json';

const Intro = () => {
    return (
        <div className="intro_sec">
            <div className="grid_system">
                <img className="main_pic" src="/images/LinkedIn Pic Portfolio Smaller.jpg" alt="Savannah Harvey"></img>
                <div className="intro">
                    <p className="name">Savannah Harvey</p>
                    <p className="major">Software Engineer</p>
                    <div className="button_links">
                        {
                            buttonLinksData.map((links) =>
                                <a href={links.href}>{links.text}</a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;