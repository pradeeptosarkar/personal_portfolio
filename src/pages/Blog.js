import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
    Box,
} from '@mui/material';
import data from '../db/data';

const Blog = () => {
    return (
        <Container id="blog" sx={{ mx: { xl: '6rem' }, ml: { "2xl": '13rem' }, my: '6rem', display: 'grid' }}>
            <Box sx={{ mx: { xs: 4 } }}>
                <Typography variant="h6" sx={{ mr: 2, color: '#ccd6f6' }}>
                    <Typography variant="span" sx={{ color: '#64ffda' }}>
                        05.{" "}
                    </Typography>
                    Blog
                </Typography>
                <Typography variant="h4" sx={{ fontFamily: 'sans-serif', fontWeight: 800, my: 2, px: 5 }}></Typography>
            </Box>
            {data.blogPosts.map((post, index) => (
                <Card
                    key={index}
                    elevation={0}
                    sx={{
                        bgcolor: 'transparent',
                        ":hover": "none",
                        color: '#ccd6f6',
                        borderRadius: 0,
                        mx: { xs: 4 },
                        mb: { xxs: '3rem', md: '7rem', mmd: '4rem' },
                    }}
                >
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CardMedia
                                component="img"
                                image={post.img}
                                alt={post.title}
                                sx={{ width: '100%', maxWidth: '400px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                            <CardContent sx={{ textAlign: { md: 'left' } }}>
                                <Typography variant="body2" sx={{ mb: 1, color: '#64ffda' }}>
                                    Featured Blog
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <a href={post.link} style={{ color: '#ccd6f6', textDecoration: 'none' }}>
                                        {post.title}
                                    </a>
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#8892af', fontFamily: 'sans-serif' }}>
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Container>
    );
};

export default Blog;
