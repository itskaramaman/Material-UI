import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline,
      Grid, Toolbar, Container } from '@mui/material';

import { PhotoCamera } from '@mui/icons-material';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" style={{marginTop: '100px'}}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, This is a photo album and I am trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md" style={{padding: '20px'}}>
                    <Grid container spacing={4}>
                        {cards.map((i)=>(
                            <Grid item key={i} xs={12} sm={6} md={4}>
                            <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardMedia image="https://source.unsplash.com/random" title="Image Title" style={{paddingTop: '56.25%'}} />
                                <CardContent style={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography gutterBottom variant="h5">
                                        This is a media card. You can use this section to describe content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer style={{padding:'50px 0'}}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography varaint="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose.
                </Typography>
            </footer>
        </>
        
    )
}

export default App