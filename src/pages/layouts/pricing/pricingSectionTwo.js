import React from 'react';
import { Grid } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import PricingCardTwo from '../../../components/UI/pricingCardTwo';
import { Pricing } from "../../../config/static";

const PricingSectionTwo = () => {
    return (
        <Flexcontainer maxWidth={false} bgColor="#e3f2fd">
            <Grid container  sx={{ paddingBottom:'60px' }}>
                {Pricing.plans.map(plan => (
                    <Grid item xs={12} justifyContent="center" alignItems="center" display="flex"  sx={{ padding: { xs: '20px 0px',  lg: '20px 180px'}}}>
                        <PricingCardTwo key={plan.type} plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Flexcontainer>
    );
}

export default PricingSectionTwo;
