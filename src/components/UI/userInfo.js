import React, { useState } from 'react';
import { Box, Avatar, styled, Typography } from '@mui/material';
import zIndex from '@material-ui/core/styles/zIndex';

const StyledAvatar = styled(props => (
    <Avatar {...props} />
))(({theme}) => ({
    '& .MuiAvatar-img': {
        borderRadius: '50%'
    },
    padding: '15px',
    width: '270px',
    height: '270px',
    borderRadius: '50%',
    transition: '.3s',
    '&:hover': {
        padding: '0px'
    }
}));

const StyledBox = styled(props => (
    <Box {...props} />
))(({theme, ...rest}) => ({
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
}))

const UserInfo = ({src, alt, name , position}) => {

    return (
        <StyledBox >
            <StyledAvatar
                alt={alt}
                src={src}
            />
            <Box sx={{textAlign: 'center', marginTop: '25px'}}>
                <Typography >{name}</Typography>
                <Typography>{position}</Typography>
            </Box>
        </StyledBox>
    );
}

export default UserInfo;
