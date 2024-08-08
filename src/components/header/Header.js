    import React from 'react';
    import { AppBar, Toolbar, Button, Grid, Box } from '@mui/material';
    import './Header.css';
    const Header = () => {
    return (
        <AppBar
        position="static"
        className="header-background"
        sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            height: '64px',
            backgroundImage: `url(${process.env.PUBLIC_URL}/BackgroundHeader.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'black',
        }}
        >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box component="a" href="#home">
            <img src={`${process.env.PUBLIC_URL}/headerlogo.png`} alt="Logo" style={{ height: '50px' }} />
            </Box>
            <Grid container justifyContent="flex-end">
            <Button color="inherit" sx={{ marginLeft: 2, color: 'black' }} href="#home">Home</Button>
            <Button color="inherit" sx={{ marginLeft: 2, color: 'black' }} href="#ourwork">Our Work</Button>
            <Button color="inherit" sx={{ marginLeft: 2, color: 'black' }} href="#experiences">Experiences</Button>
            <Button color="inherit" sx={{ marginLeft: 2, color: 'black' }} href="#services">Services</Button>
            <Button
                sx={{
                marginLeft: 2,
                marginRight: 18,
                backgroundColor: '#ffffff',
                color: '#000000',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                }
                }}
                href="#wecanhelpyou"
            >
                We can help you
            </Button>
            </Grid>
        </Toolbar>
        </AppBar>
    );
    };

    export default Header;
