import React from 'react';
import "../css/hero.css"

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="content">
                <h3>Hi, I am</h3>
                <h1>Shri Kadhir K</h1>
                <p>Software Engineer / Full Stack Developer</p>
                <nav className="socials">
                    <a
                        href="https://www.linkedin.com/in/shri-kadhir-k-a57aa2218"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./images/linkedin.png" alt="LinkedIn Profile" />
                    </a>
                    <a
                        href="https://github.com/shri282"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./images/github.png" alt="GitHub Profile" />
                    </a>
                    <a
                        href="https://leetcode.com/shrikadhir/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./images/icons8-leetcode-16.png" alt="LeetCode Profile" />
                    </a>
                </nav>
            </div>
            <div className="intro-pic">
                <img
                    src="/images/WhatsApp Image 2025-06-27 at 23.55.40_c7f4633d.jpg"
                    alt="Shri Kadhir Portrait"
                />
            </div>
        </section>
    );
};

export default Hero;
