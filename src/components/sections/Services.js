    import React from 'react';
    import { Typography, Box, Container, Grid } from '@mui/material';
    import DesignServicesIcon from '@mui/icons-material/DesignServices';
    import CodeIcon from '@mui/icons-material/Code';

    const Services = () => {
    return (
        <Box sx={{ padding: '90px 140px' }}>
        <Container>
            <Typography variant="h2" sx={{ mb: 5, mr:140 }}>
            Services
            </Typography>
            <Grid container spacing={8} sx= {{alignItems:'left' }} mb={10} >
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <DesignServicesIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography variant="h5" mb={3}textAlign={'left'}>Design</Typography>
                <Typography variant="body1" sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt hendrerit augue. Donec turpis ullamcorper interdum eu enim enim et. Sed elementum vel dolor consequat diam adipiscing proin. Eget amet vestibulum odio a elementum tortor. 
                    Erat purus neque ullamcorper neque vivamus. </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <DesignServicesIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography variant="h5"mb={3}textAlign={'left'}>Design</Typography>
                <Typography variant="body1" sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt hendrerit augue. Donec turpis ullamcorper interdum eu enim enim et. Sed elementum vel dolor consequat diam adipiscing proin. Eget amet vestibulum odio a elementum tortor. 
                    Erat purus neque ullamcorper neque vivamus. .</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <CodeIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography variant="h5"mb={3}textAlign={'left'}>Dev</Typography>
                <Typography variant="body1" sx={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt hendrerit augue. Donec turpis ullamcorper interdum eu enim enim et. Sed elementum vel dolor consequat diam adipiscing proin. Eget amet vestibulum odio a elementum tortor. 
                    Erat purus neque ullamcorper neque vivamus. </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <CodeIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography variant="h5" mb={3} textAlign={'left'} >Dev</Typography>
                <Typography variant="body1" sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt hendrerit augue. Donec turpis ullamcorper interdum eu enim enim et. Sed elementum vel dolor consequat diam adipiscing proin. Eget amet vestibulum odio a elementum tortor. 
                Erat purus neque ullamcorper neque vivamus.</Typography>
                </Box>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
    };

    export default Services;