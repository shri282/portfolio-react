import React, { useEffect } from 'react';
import "../css/header.css";

const Header = () => {
    // Smooth scroll handler
    const navHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const section = event.currentTarget.innerText;
        let sectionId = '';

        switch (section) {
            case 'About me':
                sectionId = 'about-me';
                break;
            case 'Skills':
                sectionId = 'skills';
                break;
            case 'Projects':
                sectionId = 'projects';
                break;
            case 'Experience':
                sectionId = 'experience';
                break;
            case 'Contact me':
                sectionId = 'contact-me';
                break;
            default:
                return;
        }

        const sectionDiv = document.getElementById(sectionId);
        if (sectionDiv) {
            const yOffset = -70; // header offset
            const y = sectionDiv.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Toggle header class on scroll
    useEffect(() => {
        const header = document.getElementById('main-header');

        const toggleHeaderClass = () => {
            if (window.scrollY === 0) {
                header?.classList.add('header-top');
            } else {
                header?.classList.remove('header-top');
            }
        };

        window.addEventListener('scroll', toggleHeaderClass);
        toggleHeaderClass(); // initial load

        return () => {
            window.removeEventListener('scroll', toggleHeaderClass);
        };
    }, []);

    return (
        <header id="main-header" className="header-top">
            <h5 style={{ color: 'red' }}>PORTFOLIO</h5>
            <nav className="pages">
                <a className="nav" onClick={navHandler}>About me</a>
                <a className="nav" onClick={navHandler}>Skills</a>
                <a className="nav" onClick={navHandler}>Projects</a>
                <a className="nav" onClick={navHandler}>Experience</a>
                <a className="nav" onClick={navHandler}>Contact me</a>
            </nav>
        </header>
    );
};

export default Header;