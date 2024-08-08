    import React from 'react';
    import { Typography, Box, Container, Grid } from '@mui/material';

    const OurWork = () => {
    return (
        <Box id="ourwork">
        <Container
            maxWidth={false}
            sx={{
            padding: '80px 140px', // add padding to the container
            maxWidth: '100%', // make sure the container takes up the full width
            }}
        >
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ mb: 2,
                    textAlign:'left',
                    marginLeft:'140px'
                    }}>
                Our Work
                </Typography>
                <Typography
                variant="body1"
                sx={{
                    mb: 4,
                    textAlign: 'left',
                    marginLeft: '140px',
                }}
                >
                Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt
                hendrerit augue. Donec turpis ullamcorper interdum eu enim enim
                et. Sed elementum vel dolor consequat diam adipiscing proin. Eget
                amet vestibulum odio a elementum tortor. Ante proin tellus duis
                suspendisse. Purus semper neque ullamcorper egestas suspendisse.
                <br></br>
                Nibh elit nunc vestibulum nam tincidunt mattis leo arcu tincidunt.
                Dui vel dignissim nisl id consectetur feugiat pellentesque ut
                elementum. Elit vitae ac et eget risus at. Cursus velit risus ac
                elit morbi. Faucibus ultricies volutpat lectus molestie et ornare.
                Nisl in feugiat erat imperdiet quisque. 
                <br></br>
                Aliquam leo scelerisque lobortis rhoncus ac gravida. Condimentum nulla quis suspendisse
                faucibus malesuada sed proin cursus sapien. Sem eget leo malesuada
                metus a sit et. Pellentesque lobortis risus lorem lectus tortor
                pretium nisi eg
                </Typography>
            </Grid>
            <Grid item xs={10} md={5}>
                <Box
                component="img"
                src="/OurWork.png"
                alt="Imagen description"
                sx={{
                    maxWidth: '100%',
                    width: '90%',
                    height: 'auto',
                    marginRight: '140px',
                }}
                />
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
    };

    export default OurWork;
