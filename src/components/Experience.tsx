import React from 'react';
import "../css/exp.css"

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <p>Here is the quick summary of my most recent experiences:</p>

            <div className="experience-container">
                <div className="exp-item">
                    <div className="company-logo">
                        <img src="./images/softsuave_logo.webp" alt="Softsuave Logo" />
                    </div>

                    <div className="exp-description">
                        <h3 className="exp-title">Software Engineer</h3>
                        <ul className="exp-res">
                            <li>
                                Built scalable backend systems using Spring Boot and Node.js, focusing on clean, modular architecture.
                            </li>
                            <li>
                                Implemented and monitored RESTful APIs to support seamless integration with third-party services.
                            </li>
                            <li>
                                Developed responsive and dynamic user interfaces using React, integrating seamlessly with backend APIs
                                for real-time data interaction.
                            </li>
                            <li>
                                Enhanced database efficiency using MongoDB and MySQL, optimizing queries for better performance.
                            </li>
                        </ul>
                        <h4 className="exp-date">Jan 2024 - Apr 2025</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
