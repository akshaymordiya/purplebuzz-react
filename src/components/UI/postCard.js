import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Box, styled, Stack } from "@mui/material";
import BrandButton from '../elements/brandButton';
import { DoubleArrow, FavoriteBorder, Forum } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledCard = styled(props => <Card {...props} />)(({theme, radius}) => ({
    maxWidth: 400,
    margin: '15px',
    ...(radius && ({
        borderRadius: radius
    })),
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '10px 0px'
    }
}));

const StyledBox = styled(props => <Box {...props}></Box>)(() => ({
    display: 'flex',
    alignItems: 'center',
    margin: '0px 10px',
    marginBottom: '10px',
    color: '#4232c2',
    transition: '.3s',
    '&:hover': {
        marginLeft: '18px'
    }
}))

const PostCard = ({post, url, ...restProps}) => {
    const posts = useSelector(state => state.work.workPosts);
    const details = posts.find(p => p.id === post.id);
    return (
        <StyledCard {...restProps}>
            <NavLink to={url} style={{ textDecoration: 'none', color: '#000'}} >
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="340"
                    width="100%"
                    image={post.thumbnail}
                    alt={post.title}
                    />
                </CardActionArea>
                    <CardContent>
                        <Box padding="0px 10px">
                            <Typography gutterBottom variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.description}
                            </Typography>
                        </Box>
                    </CardContent>
                <CardActions>
                    <Box width="100%" display="flex" justifyContent={restProps.likeCommentsInfo ? 'space-between' : 'flex-start'}>
                        <StyledBox>
                            <Typography variant="p" fontWeight="bold" marginX="5px" sx={{ cursor: 'pointer'}}>Read More</Typography>
                            <DoubleArrow />
                        </StyledBox>
                        {restProps.likeCommentsInfo && (
                            <Stack direction="row">
                                <FavoriteBorder sx={{ color: '#4232c2'}} />
                                <Typography variant="body2" marginX="10px" fontSize="16px" color="#4232c2">{details.numberOfLikes}</Typography>
                                <Forum sx={{ color: '#4232c2'}} />
                                <Typography variant="body2" marginX="10px" fontSize="16px" color="#4232c2">{details.numberOfComments}</Typography>
                            </Stack>
                        )}
                    </Box>
                </CardActions>
            </NavLink>
        </StyledCard>
    );
}

export default PostCard;
