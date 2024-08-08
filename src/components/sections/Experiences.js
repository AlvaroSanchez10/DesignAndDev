        import React from 'react';
        import { Typography, Box, Container } from '@mui/material';
        import { Carousel } from 'react-responsive-carousel';
        import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carrusel

        const Experiences = () => {
        const items = [
            {
            title: 'Experience 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'carrousel1.png',
            },
            {
            title: 'Experience 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'carrousel2.png',
            },
            {
            title: 'Experience 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'carrousel3.png',
            },
        ];

        return (
            <Box id="experiences" sx={{ padding: '90px 140px' }}>
            <Container>
                <Typography variant="h2" sx={{ mb: 2 }}>
                Our most recent{' '}
                <Box component="span" sx={{ color: '#90ABC9' }}>
                    experiences
                </Box>{' '}
                <br />
                working with clients
                </Typography> 
                </Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <img src="SocialMedia.png" alt="Social Media" style={{ width: '90%', height: 'auto' }} />
                </Box>
                <Container>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop >
                {items.map((item, index) => (
                    <div key={index}>
                    <img src={item.image} alt={item.title} sx={{ width: '100%', height: 'auto' }} />
                    <div className="legend">
                        <Typography variant="h5" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                        {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#666' }}>
                        {item.description}
                        </Typography>
                    </div>
                    </div>
                ))}
                </Carousel>
            </Container>
            </Box>
        );
        };

        export default Experiences;
