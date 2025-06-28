import React from 'react';
import "../css/projects.css";
import { Box, Button, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const projects = [
    {
        name: 'Shopnest',
        tools: ['SpringBoot', 'React', 'MySQL'],
        description: 'A dynamic e-commerce platform with integrated authentication, product, cart, and payment modules.',
        gitHubLink: 'https://github.com/shri282/ShopNest-BE',
        liveLink: 'https://shop-nest-fe.vercel.app/',
        image: '/images/Screenshot 2025-06-28 050747.png',
    },
    {
        name: 'ChatApp',
        tools: ['React', 'Express.js', 'MySQL'],
        description: 'Real-time chat app supporting 1-on-1 and group messaging with profile settings, notifications, and read receipts.',
        gitHubLink: 'https://github.com/shri282/Chat-App2.0-BE',
        liveLink: 'https://chat-app2-0-fe.vercel.app/',
        image: '/images/Screenshot 2025-06-28 050506.png',

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
                                {project.name === 'Shopnest' && <><br /><strong>Note: Server spins down if idle, may take 60-90 sec to load.</strong></>}
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
