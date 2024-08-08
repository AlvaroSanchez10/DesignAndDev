    import React from 'react';
    import { Typography, Box, Container, Grid, TextField, FormControl, InputLabel, Button } from '@mui/material';

    const WeCanHelpYou = () => {
    return (
        <Box id="ourwork" sx={{ backgroundColor: '#F8F8F8' }}>
        <Container
            maxWidth={false}
            sx={{
            padding: '80px 100px', // add padding to the container
            maxWidth: '100%',
            }}
        >
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box
                component="img"
                src="/helpSection.png"
                alt="Imagen description"
                sx={{
                    width: '100%',
                    height: 'auto',
                    margin: 0, // removed margin to occupy full half of the screen
                }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'left', marginLeft: '80px' }}>
                We'd love to help you
                </Typography>
                <Typography
                variant="body1"
                sx={{
                    mb: 8,
                    textAlign: 'left',
                    marginLeft: '80px',
                    marginRight: '80px',
                    fontSize:16,
                }}
                >
                Lorem ipsum dolor sit amet consectetur. Massa mattis sed tincidunt
                hendrerit augue. Donec turpis ullamcorper interdum eu enim enim
                et. Sed elementum vel dolor consequat diam adipiscing proin. Eget
                amet vestibulum odio a elementum tortor. Ante proin tellus duis
                suspendisse. Purus semper neque ullamcorper egestas suspendisse.
                </Typography>
                <form>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel>Nombre</InputLabel>
                        <TextField id="name" />
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel>Apellido</InputLabel>
                        <TextField id="lastname" />
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel>Correo electrónico</InputLabel>
                        <TextField id="email" />
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel>Nacionalidad</InputLabel>
                        <TextField id="email" />
                    </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl style={{ width: '80%' }}>
                        <InputLabel margin={100}>Mensaje</InputLabel>
                        <TextField id="message" multiline rows={2} />
                    </FormControl>
                    </Grid>
                    <Grid item xs={11}>
                    <Button variant="contained"  style={{
                                float: 'right',
                                backgroundColor: 'white',
                                border: '1px solid #ccc',
                                color:'black',
                                fontSize:16,
                                padding: '12px 24px'
                                                        }}>
                        Send
                    </Button>
                    </Grid>
                </Grid>
                </form>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
    };

    export default WeCanHelpYou;
