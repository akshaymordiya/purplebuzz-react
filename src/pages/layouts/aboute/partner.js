import React, { memo } from 'react';
import { Typography, Box, Grid, styled } from '@mui/material';
import { Apartment, EvStation, Spa, VerifiedUser } from '@mui/icons-material';
import Flexcontainer from '../../../components/UI/flexContainer';
import FlexBox from '../../../components/UI/flexBox';


const StyledIcon = styled(({ component: Component, ...restProps}) => (
    <Component {...restProps} />
))(({theme, ...rest}) => ({
    fontsize: rest.fontsize,
    color: '#fff',
}))

const StyledBox = styled(props => (
    <Box {...props} />
))(({theme}) => ({
    width: '100%',
    height: '150px',
    margin: '20px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(144, 202, 249, 0.4)',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
        backgroundColor: 'rgba(144, 202, 249, 1)'
    }
}))

const Partner = () => {
    return (
        <Flexcontainer maxWidth={false} padding="60px 20px" bgColor responsive>
            <Typography variant="h4" fontWeight="bold" marginTop="50px" color="#fff">Our Partner</Typography>
            <Grid container  marginTop="30px" textAlign="center" display="flex" justifyContent='center'>
                <Grid item xs={12} md={6} lg={3} justifyContent="center" display="flex">
                    <StyledBox>
                        <StyledIcon component={Apartment} style={{ fontSize:"60px" }}/>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3} justifyContent="center" display="flex">
                    <StyledBox>
                        <StyledIcon component={VerifiedUser} style={{ fontSize:"60px" }}/>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3} justifyContent="center" display="flex">
                    <StyledBox>
                        <StyledIcon component={EvStation} style={{ fontSize:"60px" }}/>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3} justifyContent="center" display="flex">
                    <StyledBox>
                        <StyledIcon component={Spa} style={{ fontSize:"60px" }}/>
                    </StyledBox>
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default memo(Partner);
