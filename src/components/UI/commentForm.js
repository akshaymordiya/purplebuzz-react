import React, { useEffect, useState } from 'react';
import { Box, Grid, Snackbar, Alert, AlertTitle, Typography, Button  } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';
import BrandButton from '../elements/brandButton';
import InputText from './inputText';
import { required, emailAddress, lt, st } from "../../helpers/validationRules/index";
import useInputHandler from '../../helpers/hooks/useInputHandler';
import { useDispatch } from 'react-redux';
import { addNewComment, replyToComment} from "../../store/post/postDetailsSlice";
import { updateNumberOfComments } from "../../store/work/workSlice";
import { v4 as uuidv4 } from "uuid";
import moment from 'moment';
const nameValidationsRules = [
    required,
    {
        rule: lt,
        argument: [200]
    },
    {
        rule: st,
        argument: [3]
    }
];
const emailValidationsRules = [
    required,
    emailAddress,
    {
        rule: lt,
        argument: [200]
    },
    {
        rule: st,
        argument: [3]
    }
];
const commentValidationsRules = [
    required,
    {
        rule: lt,
        argument: [400]
    },
    {
        rule: st,
        argument: [5]
    }
];

const CommentForm = ({post, replyingStatus, discardReplyHandler}) => {
    const [name , bindName, nameErrors, clearName] = useInputHandler("", "text", {placeholder: "Name", label: 'Name', validationRules: nameValidationsRules});
    const [email , bindEmail, emailErrors, clearEmail] = useInputHandler("", "email", {placeholder: "Email", label: 'Email', validationRules: emailValidationsRules});
    const [comment , bindComment, commentErrors, clearComment] = useInputHandler("", "text", {placeholder: "Your Comment", label: replyingStatus.replying ? replyingStatus.replyto : 'Your Comment' , validationRules: commentValidationsRules});
    const dispatch = useDispatch();
    const [ snackbar, setSnackbar ] = useState({
        status: false,
        message: '',
        type: ''
    });
    
    const sendingComment = () => {
        if(nameErrors.length || emailErrors.length || commentErrors.length){
            setSnackbar({
                status: true,
                message: 'Please clear all the errors to submit your query!',
                type: 'error'
            });
            return;
        };
        const feilds = [ name, email, comment];
        let checkEmptyFeilds = false;
        feilds.forEach(feild => {
            if(feild === ""){
                checkEmptyFeilds = true;
                return;
            }
        });
        if(checkEmptyFeilds){
            setSnackbar({
                status: true,
                message: "Please fill the empty feilds!",
                type: 'error'
            });
            return;
        };
        const creatComment = {
            id: uuidv4(),
            author: name,
            created_at: moment().format(),
            comment,
            replies: []
        };
        const payload = {
            postId: post.id,
            comment: creatComment
        };
        let calculateLength = 0;
        post.comments.forEach(comment => calculateLength += (comment.replies.length + 1))
        console.log(calculateLength);
        if(replyingStatus.replying){
            payload.commentId = replyingStatus.selectedCommentId;
            dispatch(replyToComment(payload))
            const numberOfComments = calculateLength + 1;
            dispatch(updateNumberOfComments({ postId: post.postId, numberOfComments}));
            setSnackbar({
                status: true,
                message: `Replied to ${replyingStatus.commentTo}..`,
                type: 'success'
            });
            discardReplyHandler();
        }else{
            dispatch(addNewComment(payload));
            const numberOfComments = calculateLength + 1;
            dispatch(updateNumberOfComments({ postId: post.postId, numberOfComments}))
            setSnackbar({
                status: true,
                message: "commented..",
                type: 'success'
            });
        }
        clearName();
        clearEmail();
        clearComment();
    };

    useEffect(() => {
        return () => {
            discardReplyHandler();
            clearName();
            clearEmail();
            clearComment();
        }
    }, [post.id]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({
            status: false,
            message: '',
            type: ''
        });
    };

    return (
        <Box>
            <Snackbar open={snackbar.status} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={snackbar.type} sx={{ width: '100%' }}>
                    <AlertTitle>{snackbar.type}</AlertTitle>
                        {snackbar.message}
                </Alert>
            </Snackbar>
            <Box display="flex" justifyContent="space-between">
                <div>
                    <Typography variant="h6" fontWeight="bold" marginTop="40px" marginBottom="20px">Leave Comment</Typography>
                    <Typography variant="body2"  marginBottom="20px">Your Comment</Typography>
                </div>
                {replyingStatus.replying && (
                    <Box marginTop="60px">
                        <Button variant="outlined" startIcon={<DeleteOutline />} onClick={discardReplyHandler} >
                            Discard Reply
                        </Button>
                    </Box>
                )}
            </Box>
            <Grid cotainer>
                <Grid item xs={12} marginY="20px">
                    <InputText 
                        id="standard-multiline-static" 
                        multiline 
                        rows={4} 
                        variant="outlined" 
                        fullWidth 
                        {...bindComment} 
                        errors={commentErrors}
                        
                        />
                </Grid>
                <Grid item xs={12} marginTop="20px">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <InputText id="outlined-name" label="Name" variant="outlined" fullWidth {...bindName} errors={nameErrors} />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputText id="outlined-email" label="Email" variant="outlined" fullWidth {...bindEmail} errors={emailErrors} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box marginTop="30px" sx={{ width: { xs: "100%", sm: '30%', float: 'right' }}}>
                <BrandButton onClickHandler={sendingComment} outlined radius="10px" color="#4232c2" shadowOnHover>Send Message</BrandButton>
            </Box>
        </Box>
    );
}
export default CommentForm;