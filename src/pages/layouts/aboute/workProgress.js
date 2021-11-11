import React from 'react';
import Progress from '../../../components/UI/progress';
import { Grid, Box } from "@mui/material";
import DetailsCard from '../../../components/UI/detailsCard';
import Flexcontainer from '../../../components/UI/flexContainer';
import useWindowDimensions from '../../../helpers/hooks/useWindowDimensions';

const WorkProgress = () => {

    const { width } = useWindowDimensions();
    
    return (
        <Flexcontainer maxWidth={false} padding="60px" responsive>
            <Grid container padding={width < 600 ? '0px' : "40px 60px"}>
                <Grid item xs={12} md={6} lg={4}>
                    <DetailsCard
                        title="Creative & Make Perfect"
                        titleVarient="h4"
                        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus."
                        fontWeight="bold"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={8} padding={width < 600 ? "0px" : "40px 60px" }>
                    <Box marginY="15px">
                        <Progress type="Development" percentage="66%" />
                    </Box>
                    <Box marginY="15px">
                        <Progress type="Design" percentage="90%" />
                    </Box>
                    <Box marginY="15px">
                        <Progress type="Marketing" percentage="74%" />
                    </Box>
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default WorkProgress;
