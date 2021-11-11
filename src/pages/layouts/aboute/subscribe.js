import React, { memo } from 'react';
import { Box, InputBase, Typography } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import SubscribeByMail from '../../../components/UI/subscribeByMail';

const Subscribe = () => {
    return (
        <Flexcontainer maxWidth={false} padding="60px 40px" bgColor="#e3f2fd">
            <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" marginY="20px">Stay up to date with us</Typography>
                <Box marginY="15px">
                    <SubscribeByMail />
                </Box>
                <Typography variant="p" textAlign="center" marginTop="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt labore et dolore magna aliqua.</Typography>
            </Box>
        </Flexcontainer>
    );
}

export default memo(Subscribe);
