import React from 'react';
import { Grid } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import Aim from '../../../components/UI/aim';
import { LibraryAddCheck, Lightbulb, Refresh } from '@mui/icons-material';

const Goals = () => {
    return (
        <Flexcontainer maxWidth={false} padding="90px 40px">
            <Grid container>
                <Grid item xs={12} md={4} lg={4}>
                    <Aim iconComponent={Lightbulb} title="Our Vision" subTitle="Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra." />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Aim iconComponent={Refresh} title="Our Mission" subTitle="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Aim iconComponent={LibraryAddCheck} title="Our Goal" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." />
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default Goals;
