import React from 'react';
import "../css/about.css"

const About = () => {
    return (
        <section id="about-me" className="about-container">
            <div className="about-header">
                <h2>About</h2>
                <p>
                    Always exploring ways to enhance backend performance and code quality through thoughtful design.
                </p>
            </div>

            <div className="about-content">
                <div className="main-content">
                    <h2>Software Engineer</h2>
                    <p>
                        Hi, I’m Shri — a full stack developer with 1.4 years of experience in building scalable web
                        applications using Spring Boot for backend and React.js for frontend. Also have hands-on exposure to Node.js development. Passionate about learning new technologies, solving complex problems, and thriving in dynamic environments to deliver innovative solutions.
                    </p>

                    <div className="personal-info">
                        <div className="personal-info-list">
                            <ul>
                                <li><span style={{ color: '#e35e5e' }}>&gt;</span> &nbsp;<strong>DOB:</strong> <span>10 Nov 2000</span></li>
                                <li><span style={{ color: '#e35e5e' }}>&gt;</span> &nbsp;<strong>Phone:</strong> <span>+91 63838 77960</span></li>
                                <li><span style={{ color: '#e35e5e' }}>&gt;</span> &nbsp;<strong>Degree:</strong> <span>Master's in Computer Application</span></li>
                            </ul>
                        </div>

                        <div className="personal-info-list">
                            <ul>
                                <li><span style={{ color: '#e35e5e' }}>&gt;</span> &nbsp;<strong>City:</strong> <span>Chennai, India</span></li>
                                <li><span style={{ color: '#e35e5e' }}>&gt;</span> &nbsp;<strong>Email:</strong> <span>shrikadhir10@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        <strong>I’ve worked on projects like:</strong>
                        <br /><br />
                        🛍️ <strong>Phoenix</strong> – A Shopify Merchant Management Platform built using Node.js and React, featuring custom checkout pages and a merchant portal, where I integrated the NMI payment gateway, implemented provider-specific processor allocation, and developed functionality for voids, chargebacks, and dispute handling.
                        <br /><br />
                        📢 <strong>Waymore</strong> – A marketing platform built using a microservices architecture with Spring Boot and Node.js, where I worked on the core Java and Spring Boot microservices including the Waymore route, Contact Plus SDK, and Contact Streamer service.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
