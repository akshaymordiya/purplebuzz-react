import React, { useState } from 'react';
import { FormControl, Snackbar, Alert, styled, InputBase, Grid, Typography } from '@mui/material';
import BrandButton from '../elements/brandButton';
import useInputHandler from '../../helpers/hooks/useInputHandler';
import { required, emailAddress, lt, st} from "../../helpers/validationRules/index";

const StyledFormControl = styled(props => (
    <FormControl {...props}></FormControl>
))(() => ({
    width: '100%',
    color: '#000',
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between'
}))

const StyledInputBase = styled(props => (
    <InputBase {...props}/>
))(() => ({
    padding:'0px 20px',
    width: '100%',
    borderRight: 'none'
}))

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

const SubscribeByMail = () => {
    const [email, bindEmail, emailErrors, clearEmail] = useInputHandler("", "email", { placeholder: " Your Email", validationRules: emailValidationsRules} );
    const [open, setOpen] = useState({
        status: false,
        message: ""
    });
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({
            status: false,
            message: ""
        });
    };
    
    const subscribe = () => {
        setOpen({
            status: true,
            message: `email ${email} subscribed successfully!`
        });
        clearEmail();
    }

    return (
        <>
            <StyledFormControl >
                <Snackbar open={open.status} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {open.message}
                    </Alert>
                </Snackbar>
                <Grid container >
                    <Grid item xs={12} sm={9} display="flex" alignItems="center" backgroundColor="#fff"  border="1px solid #bdbdbd" sx={{ padding: {xs: '5px', sm: '0px'},borderRadius: { xs: '30px' , sm: '30px 0px 0px 30px'}}}>
                        <StyledInputBase
                            id="outlined-adornment-password"
                            {...bindEmail}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} sx={{ marginTop: {xs: '10px', sm: '0px'}}}>
                        <BrandButton  onClickHandler={subscribe} outlined sx={{ borderRadius: { xs:'20px' ,sm: '0px 30px 30px 0px'}}} filled color="#4232c2" textColor="#fff" fontSize="5px" spacing="10px 20px">Subscribe</BrandButton>
                    </Grid>
                </Grid>
            </StyledFormControl>
            {emailErrors.length !== 0 && (
                emailErrors.map(error => (
                    <Typography key={error} variant="body2" color="red" marginTop="5px" >{error}</Typography>
                ))
            )}
        </>
    );
}

export default SubscribeByMail;
