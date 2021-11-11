import React, { memo } from 'react';
import { Typography, Box } from "@mui/material";
import DetailsCard from '../../../components/UI/detailsCard';
import Flexcontainer from '../../../components/UI/flexContainer';

const boxStyle = {
    padding : {
        xs: '0px',
        md: '0px 50px',
        lg: '0px 90px'
    }
}

const BannerHero = () => {
    return (
        <Flexcontainer maxWidth={false} padding="60px 40px" >
            <Box sx={boxStyle}>
                <DetailsCard
                    titleVarient="h4"
                    titleTextColor="#1976d2"
                    title="Create success campaign with us!"
                    fontWeight="bold"
                    subTitle={(
                        <>
                            <Box marginY="-10px">
                                <Typography variant="h5" color="#000" marginY="5px">Elit, sed do eiusmod tempor</Typography>
                                <Typography variant="p" marginY="10px">Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</Typography>
                            </Box>
                        </>
                    )}
                />
            </Box>
        </Flexcontainer>
    );
}

export default memo(BannerHero);
