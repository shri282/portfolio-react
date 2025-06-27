import React from 'react';
import "../css/skills.css"

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-header">
                <h2>Skills</h2>
                <p>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="tech-list-grid">
                <div>
                    <img src="./images/icons8-java-48.png" alt="Java" />
                    <p>Java</p>
                </div>
                <div>
                    <img src="./images/icons8-spring-boot-48.png" alt="Spring Boot" />
                    <p>Spring Boot</p>
                </div>
                <div>
                    <img src="./images/icons8-javascript-48.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src="./images/icons8-typescript-48.png" alt="TypeScript" />
                    <p>TypeScript</p>
                </div>
                <div>
                    <img src="./images/icons8-node-js-48.png" alt="Node.js" />
                    <p>Node.js</p>
                </div>
                <div>
                    <img src="./images/icons8-express-js-64.png" alt="Express.js" />
                    <p>Express.js</p>
                </div>
                <div>
                    <img src="./images/icons8-css-48.png" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src="./images/icons8-react-40.png" alt="React" />
                    <p>React</p>
                </div>
                <div>
                    <img src="./images/icons8-mysql-50.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
                <div>
                    <img src="./images/icons8-git-48.png" alt="Git" />
                    <p>Git</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
