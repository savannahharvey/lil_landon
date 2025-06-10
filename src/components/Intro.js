import React from 'react';

const Intro = () => {
    return (
        <div className="intro_sec">
            <div className="grid_system">
                <img className="main_pic" src="/images/LinkedIn Pic Portfolio Smaller.jpg" alt="Picture of Savannah Harvey"></img>
                <div className="intro">
                    <p className="name">Savannah Harvey</p>
                    <p className="major">Software Engineer</p>
                    <div className="button_links">
                        <a href="#about_me">About Me</a>
                        <a href="#personal_projects">Personal and Academic Projects</a>
                        <a href="#work_expereince">Previous Work Experience</a>
                        <a href="#certificates_acheivements">Certificates and Acheivements</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;