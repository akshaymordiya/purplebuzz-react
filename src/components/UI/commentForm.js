import React, { useState } from 'react';
import { Box, Grid, Snackbar, Alert, AlertTitle, Typography  } from "@mui/material";
import BrandButton from '../elements/brandButton';
import InputText from './inputText';
import { required, emailAddress, lt, st } from "../../helpers/validationRules/index";
import useInputHandler from '../../helpers/hooks/useInputHandler';
import { useDispatch } from 'react-redux';
import { addNewComment, replyToComment} from "../../store/post/postDetailsSlice";
import { v4 as uuidv4 } from "uuid";
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

const CommentForm = ({postId}) => {
    const [name , bindName, nameErrors, clearName] = useInputHandler("", "text", {placeholder: "Name", label: 'Name', validationRules: nameValidationsRules});
    const [email , bindEmail, emailErrors, clearEmail] = useInputHandler("", "email", {placeholder: "Email", label: 'Email', validationRules: emailValidationsRules});
    const [comment , bindComment, commentErrors, clearComment] = useInputHandler("", "text", {placeholder: "Your Comment", label: 'Your Comment', validationRules: commentValidationsRules});
    const dispatch = useDispatch();
    const [ snackbar, setSnackbar ] = useState({
        status: false,
        message: '',
        type: ''
    });
    const [replyToComment, setReplyToComment] = useState({
        replying: false,
        replyto: '',
        selectedCommentId: 0
    })


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
            created_at: Date.now(),
            comment,
            replies: []
        };
        const payload = {
            postId,
            comment: creatComment
        };

        setSnackbar({
            status: true,
            message: "Sorry for trouble, Comment dispatching is still underconstruction!",
            type: 'error'
        });
        return;
    }

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
            <Typography variant="h6" fontWeight="bold" marginTop="40px" marginBottom="20px">Leave Comment</Typography>
            <Typography variant="body2"  marginBottom="20px">Your Comment</Typography>
            <Grid cotainer>
                <Grid item xs={12} marginY="20px">
                    <InputText id="standard-multiline-static" multiline rows={4} variant="outlined" fullWidth {...bindComment} errors={commentErrors} />
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
