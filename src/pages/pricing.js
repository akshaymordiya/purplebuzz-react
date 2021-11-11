import React, { memo } from 'react';
import { Box, Typography } from "@mui/material";
import Flexcontainer from '../components/UI/flexContainer';
import DetailsCard from '../components/UI/detailsCard';
import PricingSectionOne from './layouts/pricing/pricingSectionOne';
import PricingSectionTwo from './layouts/pricing/pricingSectionTwo';
import PricingSectionThree from './layouts/pricing/pricingSectionThree';

const Pricing = () => {
    return (
        <>
            <Flexcontainer maxWidth={false} padding="100px 40px 40px 40px">
                <Box display="flex" justifyContent="center">
                    <DetailsCard
                        titleVarient="h4"
                        title="Pricing"
                        fontWeight="bold"
                    >
                        <Box marginY="-10px">
                            <Typography variant="p" color="#000" >Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</Typography>
                        </Box>
                    </DetailsCard>
                </Box>
            </Flexcontainer>
            <PricingSectionOne />
            <Flexcontainer maxWidth={false} padding="100px 40px 40px 40px" bgColor="#e3f2fd">
                <Box display="flex" justifyContent="center">
                    <DetailsCard
                        titleVarient="h4"
                        title="Our Pricing"
                        fontWeight="bold"
                    >
                        <Box marginY="-10px">
                            <Typography variant="p" color="#000" >Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</Typography>
                        </Box>
                    </DetailsCard>
                </Box>
            </Flexcontainer>
            <PricingSectionTwo />
            <Flexcontainer maxWidth={false} padding="100px 40px 40px 40px">
                <Box display="flex" justifyContent="center">
                    <DetailsCard
                        titleVarient="h4"
                        title="Pricing"
                        fontWeight="bold"
                    >
                        <Box marginY="-10px">
                            <Typography variant="p" color="#000" >Vector illustration from <a href="https://storyset.com/">StorySet</a> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</Typography>
                        </Box>
                    </DetailsCard>
                </Box>
            </Flexcontainer>
            <PricingSectionThree />
        </>
    );
}

export default memo(Pricing);
