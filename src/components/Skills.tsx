import React, { useState } from 'react';
import "../css/skills.css"
import { Box, Button } from '@mui/material';
import Skill from './Skill';

const skills = [
    {
        name: 'HTML/CSS',
        level: 70,
        category: 'Frontend'
    },
    {
        name: 'JavaScript',
        level: 90,
        category: 'Frontend'
    },
    {
        name: 'React',
        level: 80,
        category: 'Frontend'
    },
    {
        name: 'TypeScript',
        level: 90,
        category: 'Frontend'
    },
    {
        name: 'Java',
        level: 95,
        category: 'Backend'
    },
    {
        name: 'Spring Boot',
        level: 80,
        category: 'Backend'
    },
    {
        name: 'Node js',
        level: 70,
        category: 'Backend'
    },
    {
        name: 'MySQL',
        level: 80,
        category: 'Backend'
    },
    {
        name: 'Docker',
        level: 70,
        category: 'Tools'
    },
    {
        name: 'GitHub',
        level: 90,
        category: 'Tools'
    },
    {
        name: 'Postman',
        level: 90,
        category: 'Tools'
    },
    {
        name: 'Maven',
        level: 80,
        category: 'Tools'
    },
    {
        name: 'Npm',
        level: 90,
        category: 'Tools'
    },
    {
        name: 'VS Code',
        level: 90,
        category: 'Tools'
    },
    {
        name: 'IntelliJ IDEA',
        level: 80,
        category: 'Tools'
    },
]

const categories = ["All", "Backend", "Frontend", "Tools"];

const Skills = () => {

    const [activeCategory, setActiveCategory] = useState<string>("Backend");

    const filteredSkills = skills.filter((ele) => {
        return activeCategory === "All" || ele.category === activeCategory;
    })

    return (
        <section id="skills" className="skills">
            <div className="skills-header">
                <h2>Skills</h2>
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {
                    categories.map((category: any) => {
                        return <Button
                            sx={{
                                borderRadius: '20px',
                                boxShadow: 'none',
                                backgroundColor: category === activeCategory ? '#333' : '#dcdcdc',
                                color: category === activeCategory ? 'white' : 'black',
                                ":hover": {
                                    backgroundColor: '#333',
                                    color: 'white'
                                }
                            }}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>

                    })
                }
            </Box>

            <Box
                id="skills-grid"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    width: '70%',
                    margin: 'auto',
                    padding: 4,
                    gap: 3,
                    borderRadius: 2,
                }}
            >
                {filteredSkills.map((skill, index) => (
                    <Skill
                        key={`${activeCategory}-${skill.name}`}
                        level={skill.level}
                        name={skill.name}
                    />
                ))}
            </Box>


        </section>
    );
};

export default Skills;
