import { Container,styled, Box, Typography } from '@mui/material';
import React from 'react';
import DetailsCard from '../../../components/UI/detailsCard';
import Hero from '../../../components/UI/hero';
import Banner from "../../../assets/images/banner-img-01.svg";

const StyledContainer = styled(props => (
    <Container {...props} />
))(({theme, ...rest}) =>({
    padding: rest.padding ? rest.padding : '0px',
    margin: 'auto',
    width: '80%',
    [theme.breakpoints.down('sm')] : {
        width: '100%',
        padding: '0px'
    }
}))

const HeroSection = () => {
    return (
        <Hero height="50%">
            <Hero.GridContainer spacing={-1}>
                <Hero.GridItem xs={12} md={6} lg={6} style={{ display: 'flex' , alignItem: 'center'}}>
                    <StyledContainer>
                        <DetailsCard
                            titleVarient="h3"
                            titleTextColor="#1976d2"
                            title="Contact"
                            subTitle={(
                                <>
                                    <Typography variant="h5" color="#000" >Elit, sed do eiusmod tempor</Typography>
                                    <Typography variant="p">Vector illustration is from <a href="https://storyset.com/" target="_blank">StorySet</a>. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</Typography>
                                </>
                            )}
                        />
                    </StyledContainer>
                </Hero.GridItem>
                <Hero.GridItem xs={12} md={6} lg={6} >
                    <Box sx={{ padding: { xs: '0px', md: '40px', lg: '60px' }}}>
                        <img src={Banner} ></img>
                    </Box>
                </Hero.GridItem>
            </Hero.GridContainer>
        </Hero>
    );
}

export default HeroSection;
