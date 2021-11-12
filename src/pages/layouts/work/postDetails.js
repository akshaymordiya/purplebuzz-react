import React, { Fragment, useMemo, useState } from 'react';
import { Typography, Container, Box, styled } from "@mui/material";
import { renderMarkup } from  "react-render-markup";
import Flexcontainer from '../../../components/UI/flexContainer';
import DetailsCard from '../../../components/UI/detailsCard';
import ImageGallary from '../../../components/UI/imageGallary';
import Comment from "../../../components/UI/comment";
import CommentForm from '../../../components/UI/commentForm';
import moment from 'moment';

const StyledBox = styled(props => <Box {...props} />)(() => ({
    maxHeight: '800px',
    overflowY: 'auto',
    padding: '0px 20px',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
       
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#fff',
        borderRadius: '20px'
    },   
    '&::-webkit-scrollbar-thumb' : {
        backgroundColor: '#4232c2',
        height: '10%',
        borderRadius: '10px',
        outline: '1px solid slategrey'
      }
}))

const PostDetails = ({postDetails}) => {
    const [replyToComment, setReplyToComment] = useState({
        replying: false,
        replyto: '',
        selectedCommentId: 0,
        commentTo: ''
    })

    const handleCommentReply = (comment) => {
        setReplyToComment({
            replying: true,
            replyto: `Reply to ${comment.author}...`,
            selectedCommentId: comment.id,
            commentTo: comment.author
        });
    }

    const discardCommentReply = () => {
        setReplyToComment({
            replying: false,
            replyto: '',
            selectedCommentId: 0,
            commentTo: ''
        })
    }

    return (
        <Flexcontainer >
            <Container sx={{ padding: {xs: '30px 0px' , lg: '80px'}}} >
                <DetailsCard 
                    title={postDetails.title}
                    titleVarient="h4"
                    divider
                    dividerColor="#4232c2"
                    subTitle={postDetails.shortDescription}
                    subTitleVarient="body1"
                />
                <ImageGallary images={postDetails.imageGallary} />
                <div>{renderMarkup(postDetails.markUp)}</div>
                <Typography variant="h6" fontWeight="bold" marginTop="40px" marginBottom="20px">Comments</Typography>
                <StyledBox >
                    {postDetails.comments.length ? 
                        postDetails.comments.map(comment => (
                            <Fragment key={comment.id}>
                                <Comment comment={comment} replyToParent={comment} replyHandler={handleCommentReply} />
                                {comment.replies.length !== 0 && comment.replies.map(reply => (
                                    <Box key={reply.id} paddingLeft="80px" marginTop="10px">
                                        <Comment comment={reply} replyToParent={comment} replyHandler={handleCommentReply} />
                                    </Box>
                                ))}
                            </Fragment>
                        ))  
                    : (
                        <Typography variant="body1" >No comments available, be the first one!</Typography>
                    )}
                </StyledBox>
                <CommentForm post={postDetails} replyingStatus={replyToComment} discardReplyHandler={discardCommentReply} />
            </Container>
        </Flexcontainer>
    );
}

export default PostDetails;
