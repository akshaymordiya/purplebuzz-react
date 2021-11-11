import React from 'react';
import { Grid } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import PricingCardOne from '../../../components/UI/pricingCardOne';
import { Pricing } from "../../../config/static";

const PricingSectionOne = () => {
    return (
        <Flexcontainer maxWidth={false} >
            <Grid container sx={{ padding: { xs: '0px', lg: '50px 0px' }}}>
                {Pricing.plans.map(plan => (
                    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ padding: { xs: '10px', lg: '0px 70px' }}} justifyContent="center" alignItems="center" display="flex">
                        <PricingCardOne key={plan.type} plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Flexcontainer>
    );
}

export default PricingSectionOne;
