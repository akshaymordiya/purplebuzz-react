import React from 'react';
import { Grid, Avatar, Box, Stack, Typography, styled } from "@mui/material";
import avatar from "../../assets/images/team-05.jpg";
import { Reply } from '@mui/icons-material';
import moment from 'moment';

const StyledBox = styled(props => <Box {...props} />)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        border: 'none', 
        padding: '0px 10px'
    }
}))

const Comment = ({comment, replyHandler, replyToParent}) => {
    const reply = {
        author: comment.author,
        id: replyToParent.id
    }
    return (
        <Grid container marginY="20px">
            <Grid item xs={2} md={1} >
                <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item xs={10} md={11} >
                <Box display="flex" justifyContent="space-between">
                    <Stack spacing={1}>
                        <Typography variant="p" fontWeight="bold">{comment.author}</Typography>
                        <Typography variant="body2" >{moment(comment.created_at).calendar()}</Typography>
                    </Stack>
                    <StyledBox  onClick={() => replyHandler(reply)}>
                        <Reply sx={{ color: '#4232c2', fontSize: '20px'}} />
                        <Typography variant="body1" color="#4232c2" fontSize="15px" marginX="5px">Reply</Typography>
                    </StyledBox>
                </Box>
                <Typography padding="15px" border="1px solid #e0e0e0" marginTop="10px" borderRadius="5px">
                    {comment.comment}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Comment;
