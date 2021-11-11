import React from 'react';
import { Container, Typography, Grid } from "@mui/material";
import { Flipper, Flipped } from "react-flip-toolkit";
import FlexBox from '../../../components/UI/flexBox';
import PostCard from '../../../components/UI/postCard';

const RelatedPosts = ({ relatedPosts }) => {
    return (
        <Container maxWidth={false} sx={{ padding: '20px' , backgroundColor: '#e8eaf6'}}>
            <Typography variant="h4" fontWeight="bold" color="#000" sx={{padding: {xs: '0px', md: '40px'}}}>Related Posts</Typography>        
            <Grid container >
                {relatedPosts.map(post => (
                    <Grid key={post.id} item xs={12} sm={6} lg={4}  display="flex" justifyContent="center">
                        <PostCard post={post} url={`/work/post-details/${post.id}`} radius="20px" likeCommentsInfo/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default RelatedPosts;
