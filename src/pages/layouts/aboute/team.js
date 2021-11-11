import React, { memo } from 'react';
import { Container, styled, Grid, Box} from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import DetailsCard from '../../../components/UI/detailsCard';
import UserInfo from '../../../components/UI/userInfo';
import Team01 from "../../../assets/images/team-01.jpg";
import Team02 from "../../../assets/images/team-02.jpg";
import Team03 from "../../../assets/images/team-03.jpg";

const Team = () => {
    return (
        <Flexcontainer maxWidth={false} padding="60px 40px" responsive>
            <Grid container >
                <Grid item xs={12} md={12} lg={3} style={{display: 'flex', alignItems: 'center', padding: '15px'}}>
                    <DetailsCard
                        title="Our Team"
                        titleVarient="h4"
                        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        divider
                        dividerWidth="40%"
                        dividerColor="#1976d2"
                        fontWeight="bold"
                    />    
                </Grid>
                <Grid item xs={12} md={12} lg={9}>
                    <Grid container>
                        <Grid item xs={12} md={4} lg={4}>
                            <UserInfo src={Team01} alt="team-o1" name="John Doe" position="Bussiness Development" />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <UserInfo src={Team02} alt="team-o2" name="Jane Doe" position="Media Development" />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <UserInfo src={Team03} alt="team-o3" name="Sam" position="Developer" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default memo(Team);
