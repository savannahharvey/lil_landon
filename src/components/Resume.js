import React from 'react';

const Resume = () => {
    return (
        <div>
            <section id="about_me">
                <div class="about">
                    <h3>About Me</h3>
                    <p>I am currently a junior at Brigham Young University-Idaho, studying Software Engineering with a 
                        certificate in Software Design.</p>
                    <p></p>
                </div>
            </section>
            <section id="personal_projects">
                <div class="projects">
                    <h3>Personal and Academic Projects</h3>
                    <p></p>
                    <div>
                        <iframe title="apollo11" width="420" height="315"
                        src="https://www.youtube.com/embed/WB10VEMLYr4">
                        </iframe>
                        <iframe title="ecen106" width="420" height="315"
                        src="https://www.youtube.com/embed/yOIzICYsHvo">
                        </iframe>
                    </div>
                </div>
            </section>
            <section id="work_experience">
                <div class="experience">
                    <h3>Experience and Education</h3>
                    <p>about my experience and education</p>
                </div>
            </section>
            <section id="certificates_acheivements">
                <div class="certificates">
                    <h3>Certificates and Acheivements</h3>
                    <p>about my skills and proficiencies</p>
                </div>
            </section>
        </div>
    );
}

export default Resume;