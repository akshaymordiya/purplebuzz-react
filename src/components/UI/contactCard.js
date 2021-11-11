import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import BoxIcon from './boxIcon';

const ContactCard = (props) => {
    return (
        <Stack direction="row" spacing={3} >
            <Box>
                <BoxIcon dimensions="85px" boxRadius="15px" iconFontSize="40px" outlined="1px solid #bdbdbd" bgColorOnHover="#4232c2" textOnHover="#fff" shadowOnHover color="#4232c2" iconComponent={props.icon} />
            </Box>
            <Box display="flex" flexDirection="column">
                <Typography variant="h5">{props.heading}</Typography>
                <Typography variant="p" color="#757575" >{props.name}</Typography>
                <Typography variant="p" color="#757575">{props.contact}</Typography>
            </Box>
        </Stack>

    );
}

export default ContactCard;
