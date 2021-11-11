import React, { memo } from 'react';
import { LinearProgress, linearProgressClasses, Box, Typography, styled } from "@mui/material";

const StyledLinearProgress = styled(props => (
    <LinearProgress {...props} />
))(({theme}) => ({
    height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#4232c2' : '#308fe8',
  },
}));

const Progress = ({ type, percentage }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px'}}>
                <Typography fontWeight="bold" variant="p" color="#000">{ type }</Typography>
                <Typography variant="p" color="#000">{ percentage }</Typography>
                <Typography variant="p" color="#000"></Typography>
            </Box>
            <StyledLinearProgress variant="determinate" value={percentage} />
        </Box>
    );
}

export default memo(Progress);
