import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface SkillProps {
    name: string,
    level: number
}

const Skill: React.FC<SkillProps> = ({ name, level }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const speed = 10;
        const increment = 1;

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = Math.min(oldProgress + increment, level);
                if (newProgress === level) clearInterval(timer);
                return newProgress;
            });
        }, speed);

        return () => clearInterval(timer);
    }, [level]);

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                padding: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography sx={{ textAlign: 'start' }} fontSize={17} gutterBottom>
                {name}
            </Typography>

            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 7,
                    borderRadius: 5,
                    color: '#4a90e2',
                    marginBottom: 1,
                    transition: 'width 0.3s ease-in-out',
                }}
            />

            <Typography variant="body2" align="right">
                {progress}%
            </Typography>
        </Box>
    );
};

export default Skill;
