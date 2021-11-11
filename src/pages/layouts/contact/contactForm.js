import React, { useState } from 'react';
import { TextField, Box, Grid, Typography, Alert, Snackbar, AlertTitle } from "@mui/material";
import BrandButton from '../../../components/elements/brandButton';
import useInputHandler from '../../../helpers/hooks/useInputHandler';
import { required, emailAddress, number, lt, st } from "../../../helpers/validationRules/index";
import InputText from '../../../components/UI/inputText';

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
const phoneValidationsRules = [
    required,
    number
];
const companyNameValidationsRules = [
    required,
    {
        rule: lt,
        argument: [200]
    },
    {
        rule: st,
        argument: [5]
    }
];
const subjectValidationsRules = [
    required,
    {
        rule: lt,
        argument: [100]
    },
    {
        rule: st,
        argument: [10]
    }
];
const messageValidationsRules = [
    required,
    {
        rule: lt,
        argument: [400]
    },
    {
        rule: st,
        argument: [70]
    }
];

const ContactForm = () => {
    const [name , bindName, nameErrors, clearName] = useInputHandler("", "text", {placeholder: "Name", label: 'Name', validationRules: nameValidationsRules});
    const [email , bindEmail, emailErrors, clearEmail] = useInputHandler("", "email", {placeholder: "Email", label: 'Email', validationRules: emailValidationsRules});
    const [phone , bindPhone, phoneErrors, clearPhone] = useInputHandler("", "number", {placeholder: "Phone", label: 'Phone', validationRules: phoneValidationsRules});
    const [companyName , bindCompanyName, companyNameErrors, clearCompanyName] = useInputHandler("", "text", {placeholder: "Company Name", label: 'Comapany Name', validationRules: companyNameValidationsRules});
    const [subject , bindSubject, subjectErrors, clearSubject] = useInputHandler("", "text", {placeholder: "Subject", label: 'Subject', validationRules: subjectValidationsRules});
    const [message , bindMessage, messageErrors, clearMesssage] = useInputHandler("", "text", {placeholder: "Message", label: 'Message', validationRules: messageValidationsRules});
    const [openSnackbar, setOpenSnackbar] = useState({ status: false, message: '', type: ''});

    const submitForm = () => {
        if(nameErrors.length || emailErrors.length || phoneErrors.length || companyNameErrors.length || subjectErrors.length || messageErrors.length){
            setOpenSnackbar({
                status: true,
                message: "Please clear all the errors to submit your query!",
                type: 'error'
            });
            return;
        }
        let checkEmptyFeilds = false;
        const feilds = [ name, email, phone, companyName, subject, message];
        feilds.forEach(feild => {
            if(feild === ""){
                checkEmptyFeilds = true;
                return;
            }
        });

        if(checkEmptyFeilds){
            setOpenSnackbar({
                status: true,
                message: "Please fill the empty feilds!",
                type: 'error'
            });
            return;
        };

        //TODO::make api call to record the form

        //handing success message
        setOpenSnackbar({
            status: true,
            message: `Hey ${name}, Glad to see you here.
                    \n Your query has been recorded. 
                    \n Technical team will contact you soon..`,
            type: 'success'
        });
        clearName();
        clearEmail();
        clearPhone();
        clearCompanyName();
        clearSubject();
        clearMesssage();
        return;

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar({
            status: false,
            message: '',
            type: ''
        });
    };

    return (
        <Box>
            <Snackbar open={openSnackbar.status} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={openSnackbar.type} sx={{ width: '100%' }}>
                    <AlertTitle>{openSnackbar.type}</AlertTitle>
                        {openSnackbar.message}
                </Alert>
            </Snackbar>
            <Grid Container>
                <Grid item  padding="13px">
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} lg={6}>
                            <InputText id="outlined-name" variant="outlined" fullWidth {...bindName} errors={nameErrors} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <InputText id="outlined-email"  variant="outlined" fullWidth {...bindEmail} errors={emailErrors} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item  padding="13px">
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} lg={6}>
                            <InputText id="outlined-phone"  variant="outlined" fullWidth {...bindPhone} errors={phoneErrors} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <InputText id="outlined-company-name" variant="outlined" type="text" fullWidth {...bindCompanyName} errors={companyNameErrors} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item   padding="13px">
                    <InputText id="outlined-subject"  variant="outlined" fullWidth {...bindSubject} errors={subjectErrors} />
                </Grid>
                <Grid item  padding="13px">
                    <InputText id="standard-multiline-static" multiline rows={4} variant="outlined" fullWidth {...bindMessage} errors={messageErrors} />
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" padding="13px">
                <BrandButton onClickHandler={submitForm} filled color="#03a9f4" textColor="#fff" spacing="15px 15px" fontsize="13px" width="20%">Send Message</BrandButton>
            </Box>
        </Box>
    );
}

export default ContactForm;
