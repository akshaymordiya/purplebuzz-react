import React from 'react';
import { Box, styled, Typography } from "@mui/material";
import BoxIcon from './boxIcon';

const StyledBox = styled(props => (
    <Box {...props} />
))(({ shadow }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(shadow && ({
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    }))
}))

const Aim = ({iconComponent, ...rest}) => {
    return (
        <StyledBox  padding="20px" flexDirection="column" >
            <BoxIcon dimensions="120px" boxRadius="20px" iconFontSize="55px" bgColor="#4232c2" color="#fff" shadow iconComponent={iconComponent} />
            <Typography variant="h5" color="#000" marginTop="20px" fontWeight="lighter">{rest.title}</Typography>
            <Typography variant="p" color="#000" marginY="10px" fontWeight="lighter" textAlign="center">{rest.subTitle}</Typography>
        </StyledBox>
    );
}

export default Aim;
