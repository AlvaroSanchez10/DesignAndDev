    import React from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
    import { Box, Container, Grid, Link, Typography } from '@mui/material';

    const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'grey', color: '#fff', py: 3 }}>
        <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                <img src="headerlogo.png" alt="Logo" style={{ maxWidth: '100px' }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <nav>
                    <Typography variant="body1" component="div" sx={{ display: 'flex', gap: 2 }}>
                    <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#ddd' } }}>Home</Link>
                    <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#ddd' } }}>About</Link>
                    <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#ddd' } }}>Contact</Link>
                    <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#ddd' } }}>Services</Link>
                    </Typography>
                </nav>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                <Box component="ul" sx={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: 2 }}>
                    <li>
                    <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </Link>
                    </li>
                    <li>
                    <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </Link>
                    </li>
                    <li>
                    <Link href="#" target="_blank" rel="noopener noreferrer" color="inherit">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </Link>
                    </li>
                </Box>
                </Box>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
    };

    export default Footer;
