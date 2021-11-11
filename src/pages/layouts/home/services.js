import React, { memo } from 'react';
import {Box, Grid, IconButton} from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";
import DetailsCard from '../../../components/UI/detailsCard';


const Services = () => {
    return (
        <Box sx={{  width: { xs: '100%', md: '80%', lg: '50%'}, paddingBottom: '70px ' }}>
            <Grid container spacing={2}>
                <Grid item xs={3} md={1}  sx={{textAlign: 'center',}}>
                    <IconButton size="large" style={{padding: '0px', color: '#000'}}>
                        <CardGiftcard style={{ fontSize: '30px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={9} md={11}>
                    <DetailsCard
                        titleVarient="h5"
                        dividerColor="#4232c2"
                        title="Make Success for future"
                        subTitle="You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy and repost this template."
                        divider
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default memo(Services);
