    import React from 'react';
    import { Button, Typography, Box } from '@mui/material';
    import './MainSection.css';

    const MainSection = () => {
    return (
        <Box className="main-section" id="mainsection">
        <Typography variant="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            We Create Your <br/>
            Custom Website.
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
            We offer modern web design services and custom web<br/>
            development, ensuring a responsive and optimized web<br/>
            experience.
        </Typography>
        <Button
            variant="contained"
            sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            '&:hover': {
                backgroundColor: '#f0f0f0',
            },
            alignSelf:'flex-start', 
            }}
            href="#contact"
        >
            Contact us
        </Button>
        </Box>
    );
    };

    export default MainSection;
