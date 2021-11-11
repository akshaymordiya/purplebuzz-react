import React from 'react';
import { Grid, Box } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import Banner from "../../../assets/images/pricing.svg"
import { Pricing } from "../../../config/static";
import PricingCardThree from '../../../components/UI/pricingCardThree';
import BrandButton from '../../../components/elements/brandButton';

const PricingSectionThree = () => {
    return (
        <Flexcontainer maxWidth={false} >
            <Grid container margin="auto" padding="40px">
                <Grid item xs={12} md={6} lg={6}  padding="0px 20px">
                    <Box>
                        <img src={Banner} alt="Plans" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}  display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                    {Pricing.plans.map(plan => (
                        <PricingCardThree key={plan.type} plan={plan} />
                    ))}
                    <Box>
                        <BrandButton outlined margin="20px 0px" color="#4232c2" radius="5px" spacing="10px" fontSize="10px" >Get Now</BrandButton>
                    </Box>
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default PricingSectionThree;
