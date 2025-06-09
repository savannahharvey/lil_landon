import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
        <section className="intro_sec">
            <div className="grid_system">
                <img className="main_pic" src="images/LinkedIn Pic Portfolio Smaller.jpg" alt="Picture of Savannah Harvey"></img>
                <div className="intro">
                    <p className="name"><span style="text-decoration: underline; text-decoration-color: #ffcf56;">Savannah Harvey</span></p>
                    <p className="major"><span style="text-decoration: underline; text-decoration-color: #ffcf56;">Software Engineer</span></p>
                    <div className="button_links">
                        <a href="#about_me">About Me</a>
                        <a href="#personal_projects">Personal and Academic Projects</a>
                        <a href="#work_expereince">Previous Work Experience</a>
                        <a href="#certificates_acheivements">Certificates and Acheivements</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="about_me">
            <div className="about">
                <h3>About Me</h3>
                <p>I am currently a junior at Brigham Young University-Idaho, studying Software Engineering with a 
                    certificate in Software Design.</p>
                <p></p>
            </div>
        </section>
        <section id="personal_projects">
            <div className="projects">
                <h3>Personal and Academic Projects</h3>
                <p></p>
                <div>
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/WB10VEMLYr4">
                    </iframe>
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/yOIzICYsHvo">
                    </iframe>
                </div>
            </div>
        </section>
        <section id="work_experience">
            <div className="experience">
                <h3>Experience and Education</h3>
                <p>about my experience and education</p>
            </div>
        </section>
        <section id="certificates_acheivements">
            <div className="certificates">
                <h3>Certificates and Acheivements</h3>
                <p>about my skills and proficiencies</p>
            </div>
        </section>
        <footer className="bg-[#f58d4e] text-white py-6 text-center">
            <p>© 2025 Savannah Harvey. All rights reserved.</p>
            
        </footer>
      </div>
    );
  }
}

export default App;
