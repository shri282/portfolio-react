import React from 'react';
import "../css/projects.css";
import { Box, Button, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const projects = [
    {
        name: 'Shopnest',
        tools: ['SpringBoot', 'React', 'MySQL'],
        description: <div className='project_description'><p>Shopnest is a full-stack e-commerce platform built with Spring Boot and React.js,
            featuring secure role-based authentication using Spring Security and JWT.
            It supports three user roles — User, Seller, and Admin — with dedicated functionality.
            Sellers can manage products, handle orders, process refunds and voids, and upload product images via
            Cloudinary.</p>
            <p>Users can browse products with advanced search, manage multiple delivery addresses, add items to
                the cart, and complete purchases using Stripe for secure payments.The platform includes modules
                for product management, user profiles, cart operations, and checkout.It uses Spring Data JPA
                and Hibernate for ORM and ensures robust backend handling with global error responses.
                A scheduler is implemented to send email reminders for abandoned carts, improving user engagement.
                The application is fully responsive, user- friendly, and deployed on cloud platforms.</p>
        </div>,
        gitHubLink: 'https://github.com/shri282/ShopNest-BE',
        liveLink: 'https://shop-nest-fe.vercel.app/',
        image: '/images/Screenshot 2025-07-12 022840.png',
    },
    {
        name: 'ChatApp',
        tools: ['React', 'Express.js', 'MongoDB'],
        description: <div className='project_description'>
            <p>ChatApp is a real-time messaging platform built with React, Node.js, and MongoDB Atlas, supporting both one-on-one and group chats. It includes secure authentication, user profiles, and real-time features like typing indicators, last seen, read receipts, and message notifications using Socket.io.</p>
            <p>Users can share text, emojis, and files, with Multer handling file uploads and Cloudinary for media storage. The frontend uses Material UI, while the backend is powered by Express.js and Mongoose. ChatApp also includes profile image uploads, group management, and a notification module for enhanced user interaction.</p>
        </div>,
        gitHubLink: 'https://github.com/shri282/Chat-App2.0-BE',
        liveLink: 'https://chat-app2-0-fe.vercel.app/',
        image: '/images/Screenshot 2025-07-02 230406.png',

    },
];

const Projects = () => {
    return (
        <Box id="projects" sx={{ mt: 8, px: 5 }}>
            <Typography className='project-title' variant="h4" textAlign="center" mb={6} fontWeight="bold">
                Projects
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 5,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {/* Text Section */}
                        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                            <Typography textAlign={'start'} variant="h5" fontWeight="bold" mb={2}>
                                {project.name}
                            </Typography>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
                                {project.tools.map((tool, i) => (
                                    <Typography
                                        key={i}
                                        sx={{
                                            backgroundColor: '#dcdcdc',
                                            borderRadius: '20px',
                                            px: 2,
                                            py: 0.5,
                                            fontSize: '0.85rem',
                                        }}
                                    >
                                        {tool}
                                    </Typography>
                                ))}
                            </Box>

                            <Typography
                                textAlign={'start'}
                                sx={{
                                    fontFamily: `'Raleway', 'Segoe UI', sans-serif`,
                                    color: '#333',
                                }}
                            >
                                {project.description}
                                <><strong>Note: Server spins down if idle, may take 60-90 sec to load.</strong></>
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none' }}
                                    onClick={() => window.open(project.gitHubLink, '_blank')}
                                >
                                    View GitHub
                                </Button>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderBottom: '2px solid red',
                                        color: 'black',
                                        textTransform: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                    onClick={() => window.open(project.liveLink, '_blank')}
                                >
                                    View Project
                                    <CallMadeIcon fontSize="small" />
                                </Button>
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                            <img
                                src={project.image}
                                alt={project.name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
