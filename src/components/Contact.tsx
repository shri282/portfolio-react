import React from 'react';
import "../css/contact.css"

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p style={{ marginTop: '40px' }} className="contact-des">
                Please contact me for further information
            </p>

            <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-address">
                        <img src="./images/icons8-address-50.png" alt="Address Icon" />
                        <div>
                            <h3>Address</h3>
                            <p>8/1 C Block, Sathasivam Road, Kattangulathur</p>
                        </div>
                    </div>

                    <div className="contact-num">
                        <img src="./images/icons8-call-50.png" alt="Call Icon" />
                        <div>
                            <h3>Call Me</h3>
                            <p>+91 63838 77960</p>
                        </div>
                    </div>

                    <div className="contact-email">
                        <img src="./images/icons8-email-50.png" alt="Email Icon" />
                        <div>
                            <h3>Email Me</h3>
                            <p>shrikadhir10@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="name-email-input">
                        <div className="name-input">
                            <h3>Your Name</h3>
                            <input type="text" />
                        </div>
                        <div className="email-input">
                            <h3>Your Email</h3>
                            <input type="email" />
                        </div>
                    </div>

                    <div className="subject-input">
                        <h3>Subject</h3>
                        <input type="text" />
                    </div>

                    <div className="message-input">
                        <h3>Message</h3>
                        <input type="text" />
                    </div>

                    <button className="sent-message-btn">Send Message</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
