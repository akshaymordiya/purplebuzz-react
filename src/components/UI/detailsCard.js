import { Box,Divider, Typography, Stack } from '@mui/material';
import React from 'react';
const DetailsCard = ({ title , subTitle, ...rest}) => {
    const propsSanitization = {
        titleVarient: rest.titleVarient ? rest.titleVarient : 'h2',
        titleTextColor: rest.titleTextColor ? rest.titleTextColor : '#000',
        subTitleVarient: rest.subTitleVarient ? rest.subTitleVarient : 'p',
        subTitleTextColor: rest.subTitleTextColor ? rest.subTitleTextColor : '#6c757d',
        dividerWidth: rest.dividerWidth ? rest.dividerWidth : '20%',
        fontWeight: rest.fontWeight ? rest.fontWeight : 'normal'
    }

    return (
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <Stack spacing={2}> 
                <Typography  variant={propsSanitization.titleVarient} color={propsSanitization.titleTextColor} fontWeight={propsSanitization.fontWeight} width="100%" maxWidth="100%" >
                    {title}
                </Typography>
                {rest.divider && (<Divider variant="middle" sx={{ textAlign:'center', borderBottom:`5px solid ${rest.dividerColor}`, width: propsSanitization.dividerWidth}} />)}
                <Typography varient={propsSanitization.subTitleVarient} color={propsSanitization.subTitleTextColor} >{subTitle}</Typography>
            </Stack>
            {rest.children}
        </Box>
    );
}

export default DetailsCard;
