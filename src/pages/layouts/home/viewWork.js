import React, { memo } from 'react';
import {IconButton, Box, Typography} from "@mui/material";
import {AssignmentTurnedIn } from "@mui/icons-material";
import BrandButton from '../../../components/elements/brandButton';

const ViewWork = () => {
    return (
        <>
            <IconButton>
                <AssignmentTurnedIn style={{ color: "#fff", fontSize:'100px' }} />
            </IconButton>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h5" color="#fff" marginTop="5px">Great transformations successful</Typography>
                <Typography variant="p" color="#fff" marginBottom="5px">Quis ipsum suspendisse ultrices gravida.</Typography>
            </Box>
            <Box sx={{marginTop: '15px'}}>
                <BrandButton outlined color="#fff" textOnHover="#000">
                        view Our Work
                </BrandButton>
            </Box>
        </>
    );
}

export default memo(ViewWork);
