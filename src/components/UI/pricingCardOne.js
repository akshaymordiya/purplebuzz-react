import React from 'react';
import { Box, Stack, styled, Typography, List, ListItem } from "@mui/material";
import { FiberManualRecord, LocalAtm } from '@mui/icons-material';
import BrandButton from '../elements/brandButton';

const StyledBox = styled(props => (
    <Box {...props}></Box>
))(({ theme, customization }) => ({
    borderRadius: '20px',
    padding: customization ? ' 30px 80px' : '30px 60px' ,
    width: '100%',
    backgroundColor: customization ? '#4232c2' : '',
    height: customization ? '600px' : '90%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    [theme.breakpoints.down('sm')]: {
        padding: '20px',
        height: '100%',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '30px',
        height: '100%',
    },
}));

const PricingCardOne = ({ plan }) => {
    return (
        <StyledBox customization={plan.customize}>
            <Stack direction="column" spacing={2} margin="15px 0px">
                <Box color={plan.customize ? '#fff' : '#4232c2'} display="flex" flexDirection="column" alignItems="center">
                    <LocalAtm style={{fontSize: '80px'}} />
                    <Typography variant="h6" color={plan.customize ? '#fff' : '#000'}>{plan.type}</Typography>
                    <Typography variant="p" color={plan.customize ? '#fff' : '#000'}>${plan.price}{plan.limit !== 0 ? `/ ${plan.limit}` : '' }</Typography>
                </Box>
                <List>
                    {plan.keyBenifits.map(benifit => (
                        <ListItem key={benifit}>
                            <Stack direction="row" spacing={1} color={plan.customize ? '#fff' : '' }>
                                <FiberManualRecord />
                                <Typography variant="p" color={plan.customize ? '#fff' : '#000'}>{benifit}</Typography>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
                <Box display="flex" justifyContent="center">
                    <BrandButton outlined color={plan.customize ? '#fff' : '#4232c2' } textOnHover={plan.customize ? '#000' : ''} spacing="20px">Get Now</BrandButton>
                </Box>
            </Stack>
        </StyledBox>
    );
}

export default PricingCardOne;
