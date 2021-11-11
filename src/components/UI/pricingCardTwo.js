import React from 'react';
import { Box, Stack, styled, Typography, List, ListItem, Grid } from "@mui/material";
import BoxIcon from './boxIcon';
import { LocalAtm, FiberManualRecord } from '@mui/icons-material';
import BrandButton from '../elements/brandButton';

const StyledBox = styled(props => (
    <Box {...props}/>
))(() => ({
    width: '100%'
}))

const PricingCardTwo = ({ plan }) => {
    return (
        <StyledBox>
            <Grid container borderRadius="20px" sx={{ backgroundColor: '#fff'}} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" >
                <Grid item xs={12} sm={3} md={3} lg={3} >
                    <BoxIcon dimensions="100%"  padding="10px" iconFontSize="85px" bgColor="#4232c2" text={plan.type} color="#fff" iconComponent={LocalAtm} sx={{borderRadius: { xs: '20px 20px 0px 0px' ,md: '020px 0px 0px 20px' }}} />
                </Grid>
                <Grid item xs={12} sm={5} md={6} md={6}  padding="20px" display="flex" justifyContent="center" alignItems="center">
                    <List dense>
                    {plan.keyBenifits.map(benifit => (
                        <ListItem key={benifit}>
                        <Stack direction="row" spacing={1} color='#000'>
                        <FiberManualRecord />
                        <Typography variant="p" ccolor='#000'>{benifit}</Typography>
                        </Stack>
                        </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3} padding="20px"  display="flex"  flexDirection="column" justifyContent="center" alignItems="center" >
                    <Typography variant="p" marginBottom="10px" color='#000'>${plan.price}{plan.limit !== 0 ? `/ ${plan.limit}` : '' }</Typography>
                    <BrandButton outlined width="50%" color='#4232c2'spacing="10px">Get Now</BrandButton>
                </Grid>
            </Grid>
        </StyledBox>
    );
}

export default PricingCardTwo;
