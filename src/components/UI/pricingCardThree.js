import React from 'react';
import { Box, Grid, Typography, styled } from "@mui/material";
import BoxIcon from './boxIcon';
import { LocalAtm } from '@mui/icons-material';
import BrandButton from '../elements/brandButton';

const StyledBox = styled(props => <Box {...props} />)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const PricingCardThree = ({plan}) => {
    return (
        <StyledBox>
            <Grid container borderRadius="8px" sx={{ backgroundColor: '#fff'}} margin="5px 0px" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" >
                <Grid item xs={12} sm={3}>
                    <BoxIcon dimensions="100%"  padding="10px" iconFontSize="85px" color="#4232c2" iconComponent={LocalAtm} sx={{borderRadius: { xs: '20px 20px 0px 0px' ,md: '020px 0px 0px 20px' }}} />
                </Grid>
                <Grid item xs={12} sm={6}   padding="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h6" color="#000" fontWeight="bold">{plan.type}</Typography>
                    <Typography variant="p" color="#000">{plan.description}</Typography>
                </Grid>
                <Grid item xs={12} sm={3} padding="20px"  display="flex"  flexDirection="column" justifyContent="center" alignItems="center" >
                    <BrandButton filled color="#4232c2" textColor="#fff" spacing="10px 15px" fontsize="13px">${plan.price}{plan.limit !== 0 ? `/ ${plan.limit}` : '' }</BrandButton>
                </Grid>
            </Grid>
        </StyledBox>
    );
}

export default PricingCardThree;
